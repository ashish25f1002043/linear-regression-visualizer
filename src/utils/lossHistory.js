export const computeLoss = (data, m, b) => {
  let sum = 0;

  data.forEach((p) => {
    const yPred = m * p.x + b;
    sum += (p.y - yPred) ** 2;
  });

  return sum / data.length;
};