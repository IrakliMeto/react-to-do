import "./CalculatorHolder.scss";

import dolar from "../../assets/icons/$.svg";
import person from "../../assets/icons/person.svg";

import { Input } from "./Input";
import { TipsWrapper } from "./TipsWrapper";

import { useEffect, useState } from "react";

const tipsList = [
  { id: 1, percent: 5 },
  { id: 2, percent: 10 },
  { id: 3, percent: 20 },
  { id: 4, percent: 25 },
  { id: 5, percent: 50 },
];

export const CalculatorHolder = ({
  onSelect,
  onChange,
  value,
  inputValueBill,
  inputValuePeople,
  activeItem,
  onChangeBill,
  onChangePeople,
}) => {
  return (
    <div className="calculator-holder">
      <Input
        inputValue={inputValueBill}
        title={"Bill"}
        icon={dolar}
        onChangeInput={onChangeBill}
      />
      <Input
        inputValue={inputValuePeople}
        title={"Number of People"}
        icon={person}
        onChangeInput={onChangePeople}
      />
      <TipsWrapper
        activeItem={activeItem}
        onSelect={onSelect}
        onChange={onChange}
        value={value}
        list={tipsList}
      />
    </div>
  );
};
