export function multivariateGD(data, lr = 0.01, epochs = 50) {
  let w1 = 0, w2 = 0, b = 0;

  const history = [];

  for (let i = 0; i < epochs; i++) {
    let dw1 = 0, dw2 = 0, db = 0;
    let loss = 0;

    for (let d of data) {
      const pred = w1 * d.x + w2 * (d.x2 || 0) + b;
      const err = pred - d.y;

      dw1 += err * d.x;
      dw2 += err * (d.x2 || 0);
      db += err;
      loss += err * err;
    }

    const n = data.length;

    w1 -= lr * dw1 / n;
    w2 -= lr * dw2 / n;
    b -= lr * db / n;

    history.push({ w1, w2, b, loss: loss / n });
  }

  return history;
}