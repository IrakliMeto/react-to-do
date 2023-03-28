import "./Test.scss";

import { useEffect, useState } from "react";

export const Test = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("zaura");
  }, [number]);

  return (
    <div className="test">
      <div>hello</div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        reRender
      </button>
      <div>{number}</div>
    </div>
  );
};
