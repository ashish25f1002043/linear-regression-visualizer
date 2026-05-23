import { useState, useEffect } from "react";

import InputPanel from "./components/InputPanel";
import Graph from "./components/Graph";
import LossGraph from "./components/LossGraph";
import DataPreview from "./components/DataPreview";
import MathSteps from "./components/MathSteps";
import CSVUploader from "./components/CSVUploader";
import PredictionChart from "./components/PredictionChart";

import { gradientDescent } from "./utils/gradientDescent";
import { r2Score, rmse } from "./utils/metrics";

function App() {

  const [data, setData] = useState([]);

  const [runs, setRuns] = useState([]);

  const [activeRun, setActiveRun] = useState(0);

  const [step, setStep] = useState(0);

  const [lossData, setLossData] = useState([]);

  const [metrics, setMetrics] = useState({
    r2: 0,
    rmse: 0
  });
    useEffect(() => {

    if (data.length < 2) return;

    const result = gradientDescent(
      data,
      0.01,
      500
    );

    const last = result[result.length - 1];

    const yTrue = data.map(d => d.y);

    const yPred = data.map(d => (
      last.m * d.x + last.b
    ));

    setMetrics({
      r2: r2Score(yTrue, yPred),
      rmse: rmse(yTrue, yPred)
    });

    const newRun = {
      id: Date.now(),
      steps: result
    };

    setRuns(prev => {
      const updated = [...prev, newRun];
      setActiveRun(updated.length - 1);
      return updated;
    });

    setStep(result.length - 1);

    setLossData(
      result.map((r, i) => ({
        x: i,
        y: r.loss
      }))
    );

  }, [data]);
  // ✅ CSV LOAD
  const handleCSVData = (csvData) => {

    const points = csvData
      .filter(d => d.x !== undefined && d.y !== undefined)
      .map(d => ({
        x: Number(d.x),
        y: Number(d.y)
      }));

    setData(points);
  };

  // ✅ TRAIN MODEL
  

  // ✅ CURRENT STEP
  const current =
    runs[activeRun]?.steps?.[step];

  return (

    <div style={styles.app}>

      {/* SIDEBAR */}
      <div style={styles.sidebar}>

        <h2>
          Linear Regression Visualizer
        </h2>

        {/* CSV */}
        <CSVUploader
          onDataLoaded={handleCSVData}
        />

        {/* INPUT */}
        <InputPanel
          onAddPoint={(p) =>
            setData([...data, p])
          }
        />

        {/* TRAIN */}
        <button
          onClick={() => {
          setData([]);
          setRuns([]);
          setActiveRun(0);
          setStep(0);
          setLossData([]);
          setMetrics({ r2: 0, rmse: 0 });
          }}
          style={styles.button}
        >
          🔄 Reset Dashboard
        </button>

        {/* METRICS */}
        <div style={styles.panel}>

          <h3>📊 Metrics</h3>

          <p>
            R²: {metrics.r2.toFixed(4)}
          </p>

          <p>
            RMSE: {metrics.rmse.toFixed(4)}
          </p>

        </div>

        {/* RUNS */}
        <div style={styles.panel}>

          <h3>Runs</h3>

          {runs.map((r, i) => (

            <button
              key={r.id}

              onClick={() => {
                setActiveRun(i);
                setStep(
                  r.steps.length - 1
                );
              }}

              style={styles.button}
            >
              Run {i + 1}
            </button>

          ))}

        </div>

      </div>

      {/* MAIN */}
      <div>

        {/* GRAPH */}
        <div style={styles.card}>

          <Graph

            dataPoints={data}

            linePoints={
              current
                ? [
                    {
                      x: Math.min(
                        ...data.map(d => d.x)
                      ),

                      y:
                        current.m *
                        Math.min(
                          ...data.map(d => d.x)
                        ) +
                        current.b
                    },

                    {
                      x: Math.max(
                        ...data.map(d => d.x)
                      ),

                      y:
                        current.m *
                        Math.max(
                          ...data.map(d => d.x)
                        ) +
                        current.b
                    }
                  ]
                : []
            }

          />

        </div>

        {/* PREDICTION */}
        <div style={styles.card}>

          <PredictionChart
            data={data}
            model={current}
          />

        </div>

        {/* LOSS */}
        <div style={styles.card}>

          <LossGraph
            lossData={lossData}
          />

        </div>

        {/* TRAINING DETAILS */}
        <div style={styles.card}>

          <MathSteps
            current={current}
            step={step}
          />

        </div>

        {/* DATA PREVIEW */}
        <div style={styles.card}>

          <DataPreview data={data} />

        </div>

      </div>

    </div>
  );
}

export default App;

// 🎨 STYLES
const styles = {

  app: {
    display: "grid",

    gridTemplateColumns:
      "300px 1fr",

    background: "#0a0f1c",

    color: "white",

    minHeight: "100vh",

    padding: "20px",

    gap: "20px"
  },

  sidebar: {

    padding: "15px",

    background:
      "rgba(255,255,255,0.05)",

    borderRadius: "12px",

    height: "fit-content"
  },

  panel: {
    marginTop: "20px"
  },

  card: {

    background:
      "rgba(255,255,255,0.05)",

    padding: "15px",

    marginBottom: "20px",

    borderRadius: "12px"
  },

  button: {

    width: "100%",

    marginTop: "10px",

    padding: "12px",

    background: "#4f46e5",

    color: "white",

    border: "none",

    borderRadius: "8px",

    cursor: "pointer",

    fontSize: "16px"
  }
};