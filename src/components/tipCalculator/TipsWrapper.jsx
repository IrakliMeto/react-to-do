import { useState, useEffect } from "react";

import "./TipsWrapper.scss";

import { Select } from "./Select";

export const TipsWrapper = ({
  list,
  activeItem,
  onSelect,
  value,
  onChange,
}) => {
  return (
    <div className="tips-wrapper">
      <h5 className="tips-wrapper__title">Select Bill</h5>
      <div className="tips-wrapper__child">
        {list.map((item) => (
          <Select
            key={item.id}
            item={item}
            activeItem={activeItem}
            onSelect={onSelect}
          />
        ))}

        <input
          placeholder="Custom"
          type="number"
          value={value}
          className={`tips-wrapper__input ${
            value ? "tips-wrapper__input--active" : ""
          } `}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
