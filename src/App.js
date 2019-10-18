import React, { useState, useRef, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import logo from "./logo.svg";
import "./App.css";

function useForceUpdate() {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick(tick => tick + 1);
  }, []);
  return update;
}

// function Piece(x, y) {
//   this.x = x;
//   this.y = y;
//   this.size = (Math.random() * 0.5 + 0.75) * 15;
//   this.gravity = (Math.random() * 0.5 + 0.75) * 0.0001;
//   this.rotation = Math.PI * 2 * Math.random();
//   this.rotationSpeed = Math.PI * 2 * Math.random() * 0.001;
// }

const colors = ["green", "violet", "yellow", "red", "blue"];

const Piece = () => {
  const random = Math.random();
  const refPiece = useRef();
  const backgroundColor = colors[Math.floor(random * 5)];
  const width = Math.random() * 25;
  const height = Math.random() * 10;
  const duration = Math.random() * 5000;

  return (
    <div
      className="element-animation"
      style={{
        width,
        height,
        backgroundColor,
        animationDuration: `${duration}ms`,
        zIndex: 1
      }}
      ref={refPiece}
    />
  );
};

function App() {
  let renderPieces = [];
  for (let i = 0; i < 100; i++) {
    renderPieces.push(Math.random());
  }

  return (
    <div style={{ backgroundColor: "white", width: "100%", height: "100vh" }}>
      {renderPieces.map((key, index) => {
        return <Piece key={key} />;
      })}
      <button
        style={{
          position: "absolute",
          bottom: "20%",
          left: `50%`,
          tranform: `translate(50%, 50%)`,
          padding: `20px`,
          zIndex: 2
        }}
      >
        Buy Now
      </button>
    </div>
  );
}

export default App;
