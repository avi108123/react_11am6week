import React, { useState } from "react";

const Switch = () => {
  const [flag, setFlag] = useState(true);

  function changeSwitch() {
    if (flag) {
      setFlag(false);
    } else {
      setFlag(true);
    }

    
   
  }

  return (
    <div>
      <div
        onClick={changeSwitch}
        style={{
          height: "100px",
          width: "200px",
          borderRadius: "50px",
          backgroundColor: flag ? "green" : "red",
          display: "flex",
          alignItems: "center",
          padding: "0 3px",
          justifyContent: flag ? "start" : "end",
        }}
      >
        <div
          style={{
            height: "98px",
            width: "98px",
            backgroundColor: "white",
            borderRadius: "50px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Switch;
