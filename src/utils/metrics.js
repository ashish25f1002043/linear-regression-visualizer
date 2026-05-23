export const r2Score = (yTrue, yPred) => {

  const mean =
    yTrue.reduce((a, b) => a + b, 0) / yTrue.length;

  let ssTot = 0;
  let ssRes = 0;

  for (let i = 0; i < yTrue.length; i++) {

    ssTot += (yTrue[i] - mean) ** 2;

    ssRes += (yTrue[i] - yPred[i]) ** 2;
  }

  // ✅ SAFE DIVISION
  if (ssTot === 0) return 1;

  return 1 - ssRes / ssTot;
};

export const rmse = (yTrue, yPred) => {

  let sum = 0;

  for (let i = 0; i < yTrue.length; i++) {
    sum += (yTrue[i] - yPred[i]) ** 2;
  }

  return Math.sqrt(sum / yTrue.length);
};