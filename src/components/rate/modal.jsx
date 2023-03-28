import React, { useState } from "react";

import "./Modal.scss";

import { Card } from "./Card";
import { Evalueted } from "./Evalueted";

export const Modal = () => {
  const [submited, setSubmited] = useState(false);

  const onSubmitHandler = (submitedData) => {
    console.log(submitedData, " gurama");
    setSubmited(submitedData);
    console.log(submited, " daloge yleoo");
  };

  const onResetHandler = () => {
    setSubmited(false);
  };

  const rateList = [
    { rate: 1, id: 1 },
    { rate: 2, id: 2 },
    { rate: 3, id: 3 },
    { rate: 4, id: 4 },
    { rate: 5, id: 5 },
  ];

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
