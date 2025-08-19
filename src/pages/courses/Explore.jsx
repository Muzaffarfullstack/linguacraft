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
    </div>
  );
}

export default Explore;
