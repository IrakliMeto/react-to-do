import { useState, useEffect } from "react";

import "./Todo.scss";

import { TodoItem } from "./TodoItem";
import { TodoAdd } from "./TodoAdd";
import { DateTime } from "./DateTime";

import todoImage from "../../assets/images/todo.png";
import flowerImage from "../../assets/images/flower.jpg";

export const Todo = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );
  const [todo, setTodo] = useState("");
  const [editItem, setEditItem] = useState(null);

  const addTodo = () => {
    if (todo) {
      setTodoList([
        ...todoList,
        {
          text: todo,
          id: Math.floor((1 + Math.random()) * 0x10000),
          isDone: false,
        },
      ]);
      setTodo("");
    }
  };

  const deleteTodo = (selectedTodo) => {
    const filteredTodo = todoList.filter((todo) => selectedTodo.id !== todo.id);
    setTodoList(filteredTodo);
  };

  const doneTodo = (selectedTodo) => {
    const updatedTodoList = todoList.map((item) => {
      if (selectedTodo.id === item.id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }
      return item;
    });
    setTodoList(updatedTodoList);
    setTodo("");
  };

  const saveTodo = (selectedTodo) => {
    if (!todo || selectedTodo.isDone) return;

    const updatedTodoList = todoList.map((item) => {
      if (selectedTodo.id === item.id) {
        return {
          ...item,
          text: todo,
        };
      }

      return item;
    });

    setTodoList(updatedTodoList);
    setTodo("");
    toggleEddit(selectedTodo.id);
  };

  const toggleEddit = (id) => {
    if (editItem === id) {
      setEditItem(null);
    } else {
      setEditItem(id);
    }
  };

  const editTodo = (selectedTodo) => {
    if (selectedTodo.isDone) return;

    setTodo(selectedTodo.text);
    toggleEddit(selectedTodo.id);
  };

  const setValueHandler = (e) => {
    setTodo(e.target.value);
  };

  const setLocalStorage = () => {
    console.log("set", todoList);
    localStorage.setItem("todoList", JSON.stringify(todoList));
  };

  useEffect(() => {
    setLocalStorage();
  }, [todoList]);

  return (
    <div className="todo-holder">
      <div className="side">
        <h1>To do</h1>
        <img src={todoImage} alt="" />
      </div>
      <div className="todo">
        <div className="todo__header">
          <DateTime />
          <img src={flowerImage} alt="Flower" />
        </div>
        <div className="todo__wrapper">
          <TodoAdd
            onAddTodo={() => {
              addTodo();
            }}
            value={todo}
            setValue={(e) => {
              setValueHandler(e);
            }}
          />

          <div className="todo__items">
            {todoList.map((item) => (
              <TodoItem
                key={item.id}
                id={item.id}
                isDone={item.isDone}
                text={item.text}
                editItem={editItem}
                onEdit={() => {
                  editTodo(item);
                }}
                onSave={() => {
                  saveTodo(item);
                }}
                onDone={() => {
                  doneTodo(item);
                }}
                onDelete={() => {
                  deleteTodo(item);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
