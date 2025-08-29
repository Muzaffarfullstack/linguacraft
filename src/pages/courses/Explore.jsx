import styles from "./Course.module.css";
import "../../index.css";

function Explore() {
  return (
    <div className="container">
      <div className={styles.exploreHeader}>
        <h1>Explore Our Courses</h1>
        <p>
          Choose from our comprehensive collection of English courses designed
          to help you <br /> achieve your language learning goals.
        </p>
      </div>

      {/* filter buttons */}
      <div className={styles.filterCourses}>
        <button onClick={() => dispatch({ type: "All" })}>All Courses</button>
        <button onClick={() => dispatch({ type: "Grammar" })}>Grammar</button>
        <button onClick={() => dispatch({ type: "SPEAKING" })}>Speaking</button>
        <button onClick={() => dispatch({ type: "Listening" })}>
          Listening
        </button>
        <button onClick={() => dispatch({ type: "Writing" })}>Writing</button>
        <button onClick={() => dispatch({ type: "Reading" })}>Reading</button>
        <button onClick={() => dispatch({ type: "General" })}>
          General English
        </button>
      </div>
    </div>
  );
}

export default Explore;
