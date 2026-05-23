import { useState } from "react";

const InputPanel = ({ onAddPoint }) => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  const handleAdd = () => {
    if (x === "" || y === "") return;
    onAddPoint({ x: Number(x), y: Number(y) });
    setX("");
    setY("");
  };

  return (
    <div>
      <h2>Enter Data Point</h2>

      <input
        placeholder="X value"
        value={x}
        onChange={(e) => setX(e.target.value)}
      />

      <input
        placeholder="Y value"
        value={y}
        onChange={(e) => setY(e.target.value)}
      />

      <button onClick={handleAdd}>Add Point</button>
    </div>
  );
};

export default InputPanel;