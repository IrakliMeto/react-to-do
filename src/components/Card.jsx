import React, { useState } from "react";
import { Button } from "./Button";
import { Rate } from "./Rate";
import star from "../assets/images/icon-star.svg";

import "./Card.scss";

export const Card = ({ list, onSubmit }) => {
  const [activeRate, setActiveRate] = useState(null);

  const onSelectHandler = (selectedRate) => {
    if (activeRate?.id === selectedRate.id) {
      setActiveRate(null);
    } else {
      setActiveRate(selectedRate);
    }
    console.log("activeRate", activeRate);
    console.log("selectedRate", selectedRate);
  };

  return (
    <div className="card">
      <div className="card__star-holder">
        <img src={star} alt="star" />
      </div>

      <h3 className="card__title">How did we do?</h3>

      <p className="card__text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="card__rate-holder">
        {list.map((item) => (
          <Rate
            key={item.id}
            onSelect={onSelectHandler}
            rateItem={item}
            activeRate={activeRate}
          />
        ))}
      </div>
      <Button
        text={"SUBMIT"}
        onClick={() => {
          onSubmit(activeRate);
        }}
        isActive={activeRate}
      />
    </div>
  );
};
