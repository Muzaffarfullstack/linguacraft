import "./CoreValues.css";
import "../../index.css";
import { useFetch } from "../../hooks/useFetch";

function CoreValues() {
  const { data, isPending, error } = useFetch("data/about.json");
  console.log(data);

  return (
    <section className="container">
      <div className="values-title">
        <h1>Our Core Values</h1>
        <p>The principles that guide everything we do</p>
      </div>

      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <div className="value-boxes">
          {data.coreValues.map((item) => {
            return (
              <div key={item.title} className="value-box">
                <img src={item.image} alt="" />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default CoreValues;
