import { useState } from "react";
import "./Todo.scss";
import { TodoItem } from "./TodoItem";
import { TodoAdd } from "./TodoAdd";
import todoImage from "../../assets/images/todo.png";
import flowerImage from "../../assets/images/flower.jpg";

export const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [edit, setEdit] = useState(false);

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
    if (!todo) return;

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
    setEdit(!edit);
  };

  const editTodo = (selectedTodo) => {
    setTodo(selectedTodo.text);
    setEdit(!edit);
  };

  const setValueHandler = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="todo-holder">
      <div className="side">
        <h1>Todo</h1>
        <img src={todoImage} alt="" />
      </div>
      <div className="todo">
        <div className="todo__header">
          <img src={flowerImage} alt="Flower" />
        </div>
        <div className="todo__wrapper">
          <TodoAdd
            onAddTodo={() => {
              addTodo();
            }}
            isEdit={edit}
            value={todo}
            setValue={(e) => {
              setValueHandler(e);
            }}
          />

          <div className="todo__items">
            {todoList.map((item) => (
              <TodoItem
                key={item.id}
                isDone={item.isDone}
                text={item.text}
                isEdit={edit}
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
