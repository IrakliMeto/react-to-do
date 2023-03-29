import "./Select.scss";

export const Select = ({ item, activeItem, onSelect }) => {
  return (
    <button
      onClick={() => {
        onSelect(item);
      }}
      className={`select ${item.id === activeItem?.id ? "select--active" : ""}`}
    >
      {item.percent} %
    </button>
  );
};
