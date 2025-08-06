import "./Mission.css";
import "../../index.css";
import { useFetch } from "../../hooks/useFetch";

function Mission() {
  const { data, isPending, error } = useFetch("/data/about.json");

  return (
    <section className="container mission-container">
      <div className="mission-vision">
        {isPending && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && (
          <div className="misson">
            <h1>{data.mission.title}</h1>
            <p>{data.mission.text}</p>
          </div>
        )}

        {data && (
          <div className="vision">
            <h1>{data.vision.title}</h1>
            <p>{data.vision.text}</p>
          </div>
        )}
      </div>
      <div className="mission-reason">
        {data && (
          <div>
            <h1>{data.whyWeStarted.title}</h1>
            <p>{data.whyWeStarted.text}</p>
            <div className="founder-container">
              <img src="/assets/white-ceo.png" alt="" className="mission-ceo" />
              <div className="founder">
                <h3> {data.whyWeStarted.founder.name}</h3>
                <p>{data.whyWeStarted.founder.role}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Mission;
