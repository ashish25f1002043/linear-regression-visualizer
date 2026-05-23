export const animateLine = (linePoints, steps = 20) => {
  if (!linePoints || linePoints.length < 2) return [];

  const start = linePoints[0];
  const end = linePoints[1];

  let frames = [];

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;

    frames.push([
      {
        x: start.x + (end.x - start.x) * t,
        y: start.y + (end.y - start.y) * t,
      },
    ]);
  }

  return frames;
};