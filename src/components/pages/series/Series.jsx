import "./series.css";
const Series = ({ series }) => {
  return (
    <div className="seriesContainer">
      {series.map((e) => {
        return (
          <div key={e.title}>
            <h1>{e.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Series;
