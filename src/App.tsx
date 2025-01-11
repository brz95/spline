import { useState } from "react";
import "./App.css";
import Spline, { SplineEvent } from "@splinetool/react-spline";

const FONTS = {
  purple: "#9C92CD",
  yellow: "#EF9F83",
  pink: "#C9828D",
};

export default function App() {
  const [defaultColor, setDefaultColor] = useState(FONTS["pink"]);
  const [isGameWin, setIsGameWin] = useState(false);
  function onSplineMouseDown(e: SplineEvent) {
    if (!e.target) return;
    const targetName = e.target.name.toLowerCase();
    if (targetName.includes("ван-гог")) {
      setIsGameWin(true);
    }
    if (targetName.includes("purple")) {
      setDefaultColor(FONTS["purple"]);
    } else if (targetName.includes("yellow")) {
      setDefaultColor(FONTS["yellow"]);
    } else if (targetName.includes("pink")) {
      setDefaultColor(FONTS["pink"]);
    }
  }

  return (
    <main>
      <div className="title" style={{ color: defaultColor }}>
        Найди картину Ван Гога
      </div>
      <div className="game-win">{isGameWin ? "Вы нашли Ван Гога!" : ""}</div>
      <div className="spline-scene">
        <Spline
          scene="https://prod.spline.design/fIatlhU9bze1jMY5/scene.splinecode"
          onSplineMouseDown={onSplineMouseDown}
        />
      </div>
    </main>
  );
}
