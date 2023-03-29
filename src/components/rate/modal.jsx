import React, { useState } from "react";

import "./Modal.scss";

import { Card } from "./Card";
import { Evalueted } from "./Evalueted";

const rateList = [
  { rate: 1, id: 1 },
  { rate: 2, id: 2 },
  { rate: 3, id: 3 },
  { rate: 4, id: 4 },
  { rate: 5, id: 5 },
];

export const Modal = () => {
  const [submited, setSubmited] = useState(false);

  const onSubmitHandler = (submitedData) => {
    setSubmited(submitedData);
  };

  const onResetHandler = () => {
    setSubmited(false);
  };

  return (
    <div className="modal">
      {!submited && <Card onSubmit={onSubmitHandler} list={rateList} />}
      {submited && (
        <Evalueted
          onReset={onResetHandler}
          selectedRate={submited.rate}
          rateQuantity={rateList.length}
        />
      )}
    </div>
  );
};
