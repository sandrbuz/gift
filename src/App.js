import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="App">
      <div className={`flip-card ${opened ? "flipped" : ""}`} onClick={() => setOpened(!opened)}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            🎁
            <p className="caption">Нажми, чтобы открыть</p>
          </div>
          <div className="flip-card-back">
            🌸 Приятно, что мы познакомились 🌸
            <p className="caption">Саша</p>
          </div>
        </div>
      </div>
    </div>
  );
}