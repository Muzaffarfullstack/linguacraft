import "./CallAction.css";
import "../../index.css";
import { useFetch } from "../../hooks/useFetch";

function CallAction() {
  const { data, isPending, error } = useFetch("/data/about.json");
  return (
    <section className="container">
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <div className="action-container">
          <h1>{data.callToAction.heading}</h1>
          <p>{data.callToAction.text}</p>
          <button className="btn first-btn">
            {data.callToAction.buttons[0]}
          </button>
          <button className="btn second-btn">
            {data.callToAction.buttons[1]}
          </button>
        </div>
      )}
    </section>
  );
}

export default CallAction;
