import { useState } from "react";

const PredictionPanel = ({ model, mode }) => {
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);

  if (!model) return null;

  const safe = (v) => isNaN(Number(v)) ? 0 : Number(v);

  const predict = () => {
    if (mode === "1D") {
      return (model.m || 0) * safe(x1) + (model.b || 0);
    }

    return (
      (model.w1 || 0) * safe(x1) +
      (model.w2 || 0) * safe(x2) +
      (model.b || 0)
    );
  };

  return (
    <div>
      <h3>🔮 Prediction</h3>

      <input type="number" onChange={(e) => setX1(e.target.value)} />

      {mode === "2D" && (
        <input type="number" onChange={(e) => setX2(e.target.value)} />
      )}

      <p>Result: {predict().toFixed(4)}</p>
    </div>
  );
};

export default PredictionPanel;