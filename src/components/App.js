import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  useEffect(() => {
    document.addEventListener("keydown", handleDir, false);
    return () => {
      document.removeEventListener("keydown", handleDir, false);
    };
  });
  const reset = () => {
    setBallPosition({ left: "0px", top: "0px" });
    setX(0);
    setY(0);
  };
  const handleStart = () => {
    setRenderBall(true);
  };
  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={() => handleStart()}>
          Start
        </button>
      );
    }
  };
  const handleDir = (event) => {
    let copyX = Number(x);
    let copyY = Number(y);
    if (event.key === "ArrowRight") {
      copyX += 5;
    } else if (event.key === "ArrowLeft") {
      copyX -= 5;
    } else if (event.key === "ArrowUp") {
      copyY -= 5;
    } else if (event.key === "ArrowDown") {
      copyY += 5;
    }
    let newPos = { left: `${copyX}px`, top: `${copyY}px` };
    setBallPosition(newPos);
    setX(copyX);
    setY(copyY);
  };

  return (
    <div className="playground">
      {renderChoice()}
      <button onClick={reset} className="reset">
        Reset
      </button>
    </div>
  );
};

export default App;
