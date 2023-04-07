import "./TodoAdd.scss";

export const TodoAdd = ({ value, onAddTodo, setValue }) => {
  return (
    <div className="todo-add">
      <input
        placeholder="Note"
        value={value}
        type="text"
        className="todo-input"
        onChange={setValue}
      />

      <button
        onClick={onAddTodo}
        className={`add-button ${value ? "add-button--active" : ""}`}
      >
        +
      </button>
    </div>
  );
};
