import Papa from "papaparse";

const CSVUploader = ({ onDataLoaded }) => {
  const handleFile = (e) => {
    const file = e.target.files[0];

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        onDataLoaded(results.data);
      },
    });
  };

  return (
    <div>
      <h3>📁 Upload CSV</h3>
      <input type="file" accept=".csv" onChange={handleFile} />
    </div>
  );
};

export default CSVUploader;