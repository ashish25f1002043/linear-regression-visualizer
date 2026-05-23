export const gradientDescent = (
  data,
  learningRate = 0.01,
  iterations = 500
) => {

  let m = 0;
  let b = 0;

  let history = [];

  for (let i = 0; i < iterations; i++) {

    let dm = 0;
    let db = 0;

    // 🔥 GRADIENT CALCULATION
    for (let d of data) {

      const pred = m * d.x + b;

      // ✅ CORRECT ERROR
      const error = d.y - pred;

      dm += (-2 * d.x * error);
      db += (-2 * error);
    }

    // ✅ AVERAGE GRADIENTS
    dm = dm / data.length;
    db = db / data.length;

    // ✅ UPDATE
    m -= learningRate * dm;
    b -= learningRate * db;

    // ✅ LOSS
    let loss = 0;

    for (let d of data) {
      const pred = m * d.x + b;
      loss += (d.y - pred) ** 2;
    }

    loss = loss / data.length;

    history.push({
      m,
      b,
      loss
    });

    // ✅ EARLY STOPPING
    if (i > 10) {

      const prevLoss = history[i - 1].loss;

      if (Math.abs(prevLoss - loss) < 0.0000001) {
        break;
      }
    }
  }

  return history;
};