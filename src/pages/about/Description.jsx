import "./Description.css";
import "../../index.css";
import { useFetch } from "../../hooks/useFetch";

function Description() {
  const { data, isPending, error } = useFetch("/data/about.json");

  return (
    <div className="description-container">
      <div className="container">
        {isPending && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && (
          <div className="description-wrapper">
            <h1>{data.about.title}</h1>
            <p>{data.about.description}</p>
            <button className="btn join-btn">{data.about.actions[0]}</button>
            <button className="btn learn-btn">{data.about.actions[1]}</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Description;
