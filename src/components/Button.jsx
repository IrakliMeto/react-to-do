import "./Button.scss";

export const Button = ({ isActive, onClick, text, diffClassName }) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={`button ${diffClassName} ${isActive ? "button--active" : ""}`}
    >
      {text}
    </button>
  );
};
