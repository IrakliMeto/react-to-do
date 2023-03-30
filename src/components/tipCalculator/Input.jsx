import "./Input.scss";

export const Input = ({ icon, title, onChangeInput, inputValue }) => {
  return (
    <div className="input">
      <label className="input__title" htmlFor="input">
        {title}
      </label>
      <div className="input__box">
        <img src={icon} alt="icon" />
        <input
          value={inputValue}
          type="number"
          className="input"
          onChange={onChangeInput}
        />
      </div>
    </div>
  );
};
