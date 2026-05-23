const DataPreview = ({ data }) => {
  if (!data?.length) return null;

  const keys = Object.keys(data[0]);

  return (
    <div style={{ marginTop: 10 }}>
      <h3>📊 Dataset Preview</h3>

      <table style={{ width: "100%", fontSize: 12 }}>
        <thead>
          <tr>
            {keys.map((k) => (
              <th key={k} style={{ textAlign: "left" }}>{k}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.slice(0, 5).map((row, i) => (
            <tr key={i}>
              {keys.map((k) => (
                <td key={k}>{row[k]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataPreview;