import "./Team.css";
import "../../index.css";
import { useFetch } from "../../hooks/useFetch";

function Team() {
  const { data, isPending, error } = useFetch("/data/about.json");
  return (
    <div className="container">
      <div className="team-text">
        <h1>Meet Our Team</h1>
        <p>The passionate people behind LinguaCraft</p>
      </div>

      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <div className="team-container">
          {data.team.map((item) => {
            return (
              <div key={item.title} className="team-box">
                <img src={item.image} alt="image" />
                <h1>{item.name}</h1>
                <h4>{item.role}</h4>
                <p>{item.bio}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Team;
