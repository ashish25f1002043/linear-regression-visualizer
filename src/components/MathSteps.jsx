const MathSteps = ({ current, step }) => {
  if (!current) return null;

  return (
    <div style={{
      marginTop: "20px",
      padding: "15px",
      background: "#111",
      color: "#fff",
      borderRadius: "10px"
    }}>
      <h2>🧠 Training Step Details</h2>

      <p>🔁 Iteration: {step}</p>
      <p>📈 m (slope): {current.m.toFixed(4)}</p>
      <p>📉 b (intercept): {current.b.toFixed(4)}</p>

      {current.loss !== undefined && (
        <p>🔥 Loss: {current.loss.toFixed(4)}</p>
      )}

      <hr />

      <p>
        {current.loss < 1
          ? "✅ Model is converging well"
          : "⚠️ Model still learning"}
      </p>
    </div>
  );
};

export default MathSteps;