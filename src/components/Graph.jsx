import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Graph = ({ dataPoints = [], linePoints = [] }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [dataPoints, linePoints]);

  const data = {
    datasets: [
      {
        label: "Data Points",
        data: dataPoints.map((p) => ({
          x: Number(p.x),
          y: Number(p.y),
        })),
        backgroundColor: "red",
        pointRadius: 6,
      },
      {
        label: "Model Line",
        data: linePoints.map((p) => ({
          x: Number(p.x),
          y: Number(p.y),
        })),
        borderColor: "blue",
        borderWidth: 2,
        showLine: true,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Scatter ref={chartRef} data={data} />
    </div>
  );
};

export default Graph;