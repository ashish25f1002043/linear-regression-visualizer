export const linearRegression = (data) => {
  let n = data.length;

  let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;

  data.forEach((p) => {
    sumX += p.x;
    sumY += p.y;
    sumXY += p.x * p.y;
    sumX2 += p.x * p.x;
  });

  let m =
    (n * sumXY - sumX * sumY) /
    (n * sumX2 - sumX * sumX);

  let b = (sumY - m * sumX) / n;

  return { m, b };
};