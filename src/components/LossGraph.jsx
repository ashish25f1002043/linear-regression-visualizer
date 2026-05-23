import { Line as LineChart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LossGraph = ({ lossData = [] }) => {

  if (!lossData.length) {
    return <p>No loss data yet</p>;
  }

  const data = {
    labels: lossData.map((_, i) => i),
    datasets: [
      {
        label: "Loss Curve",
        data: lossData.map(d => d.y),
        borderColor: "#ef4444",
        tension: 0.3,
        pointRadius: 0
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // 🔥 IMPORTANT FIX
    plugins: {
      legend: { display: true },
    },
    scales: {
      x: {
        title: { display: true, text: "Iterations" }
      },
      y: {
        title: { display: true, text: "Loss" }
      }
    }
  };

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <LineChart data={data} options={options} />
    </div>
  );
};

export default LossGraph;