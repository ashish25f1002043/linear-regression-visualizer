import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from "recharts";

const PredictionChart = ({ data, model }) => {

  if (!data.length || !model) return null;

  const chartData = data.map((d) => ({
    x: d.x,
    actual: d.y,
    predicted: model.m * d.x + model.b
  }));

  return (
    <div>
      <h3>📊 Actual vs Predicted</h3>

      <LineChart
        width={700}
        height={350}
        data={chartData}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="x" />

        <YAxis />

        <Tooltip />

        <Legend />

        <Line
          type="monotone"
          dataKey="actual"
          stroke="#10b981"
          strokeWidth={3}
        />

        <Line
          type="monotone"
          dataKey="predicted"
          stroke="#ef4444"
          strokeWidth={3}
        />
      </LineChart>
    </div>
  );
};

export default PredictionChart;