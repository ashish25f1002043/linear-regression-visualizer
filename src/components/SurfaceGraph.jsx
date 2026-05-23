import { useMemo } from "react";
import { generateSurface } from "../utils/surface";

const SurfaceGraph = ({ model }) => {

  const surface = useMemo(() => {
    if (!model) return [];
    return generateSurface(model, 10, 1);
  }, [model]);

  if (!model) return <p>Train model first 🚀</p>;

  return (
    <div style={{ color: "white" }}>
      <h3>📊 3D Regression Surface Data</h3>

      <p>
        Equation: y = {model.w1?.toFixed(2)}x1 +
        {model.w2?.toFixed(2)}x2 +
        {model.b?.toFixed(2)}
      </p>

      {/* TEMP VIEW */}
      <div style={{ fontSize: "12px", opacity: 0.8 }}>
        {surface.slice(0, 12).map((p, i) => (
          <div key={i}>
            x1: {p.x1} | x2: {p.x2} | y: {p.y.toFixed(2)}
          </div>
        ))}
      </div>

      <p style={{ marginTop: "10px", opacity: 0.6 }}>
        (Next upgrade → real 3D Plotly graph 🔥)
      </p>
    </div>
  );
};

export default SurfaceGraph;