import "./Stats.css";
import "../index.css";
import { useFetch } from "../hooks/useFetch";
function Stats() {
  const { data, isPending, error } = useFetch("/public/data/db.json");

  return (
    <div className="stats-wrapper">
      <div className="container stats-container">
        {isPending && <p>Loading...</p>}
        {error && { error }}
        {data &&
          data.stats.map((card) => {
            return (
              <div className="stats-cards" key={card.title}>
                {/* <img src={card.image} alt="" /> */}
                <h1>{card.value}</h1>
                <p>{card.title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Stats;
