import "./Rate.scss";

export const Rate = ({ rateItem, onSelect, activeRate }) => {
  return (
    <div
      className={`rate ${
        rateItem.id === activeRate?.id ? "rate--selected" : ""
      }`}
      onClick={() => {
        onSelect(rateItem);
      }}
    >
      {rateItem.rate}
    </div>
  );
};
