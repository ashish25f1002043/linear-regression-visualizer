export function generateSurface(model, range = 10, step = 1) {
  const points = [];

  for (let x1 = 0; x1 <= range; x1 += step) {
    for (let x2 = 0; x2 <= range; x2 += step) {
      const y =
        model.w1 * x1 +
        model.w2 * x2 +
        model.b;

      points.push({ x1, x2, y });
    }
  }

  return points;
}