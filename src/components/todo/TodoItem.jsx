import "./TodoItem.scss";

import circle from "../../assets/icons/circle.svg";
import doneSvg from "../../assets/icons/done.svg";
import trashSvg from "../../assets/icons/trash.svg";
import editIcon from "../../assets/icons/edit.svg";
import saveIcon from "../../assets/icons/save.svg";

export const TodoItem = ({
  id,
  text,
  onEdit,
  onSave,
  onDelete,
  onDone,
  isDone,
  editItem,
}) => {
  return (
    <div className={`todo-item ${isDone ? "todo-item--done" : ""}`}>
      <h4 className="todo-item__text">{text}</h4>
      <div className="todo-item__box">
        {editItem !== id && (
          <button onClick={onEdit} className="todo-item__button">
            <img src={editIcon} alt="" />
          </button>
        )}
        {editItem === id && (
          <button onClick={onSave} className="todo-item__button">
            <img src={saveIcon} alt="" />
          </button>
        )}
        <button onClick={onDone} className="todo-item__button">
          <img src={isDone ? doneSvg : circle} alt="" />
        </button>
        <button onClick={onDelete} className="todo-item__button">
          <img src={trashSvg} alt="" />
        </button>
      </div>
    </div>
  );
};
