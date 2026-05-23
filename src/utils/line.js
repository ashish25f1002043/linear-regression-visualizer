export const getLinePoints = (m, b, data) => {
  const xValues = data.map(d => d.x);

  const minX = Math.min(...xValues);
  const maxX = Math.max(...xValues);

  return [
    { x: minX, y: m * minX + b },
    { x: maxX, y: m * maxX + b }
  ];
};