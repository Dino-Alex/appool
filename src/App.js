import './App.css'
import React from "react";
import { useWindowSize } from "./useWindowSize";
import backgroundImage from "./image/background.gif";

function App() {
  const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 1080 });
  const { rotate, width, height, marginLeft, ratio } = size;
  console.log('height::: ', height);

  return (
    <div
      id="root"
      className="container-screen mobile-rotater background"
      style={{
        height,
        width,
        transform: `rotate(${rotate})`,
        marginLeft: marginLeft,
      }}
    >

    </div>
  );
}

export default App;
