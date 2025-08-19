import styles from "./Course.module.css";
import "../../index.css";
import { useFetch } from "../../hooks/useFetch";
import { useReducer, useEffect } from "react";

function Cards() {
  const { data, isPending, error } = useFetch("/data/course.json");

  useEffect(() => {
    if (data?.cards) {
      dispatch({ type: "SET_COURSES", payload: data.cards });
    }
  }, [data]);

  const initialState = () => ({
    allCourses: [],
    filteredCourses: [],
  });

  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "SET_COURSES":
        return { ...state, allCourses: payload, filteredCourses: payload };
      case "All":
        return { ...state, filteredCourses: state.allCourses };
      case "Grammar":
        return {
          ...state,
          filteredCourses: state.allCourses.filter((item) => {
            return item.title.includes("Grammar");
          }),
        };
      case "SPEAKING":
        return {
          ...state,
          filteredCourses: state.allCourses.filter((item) => {
            return item.title.includes("Speaking");
          }),
        };
      case "Listening":
        return {
          ...state,
          filteredCourses: state.allCourses.filter((item) => {
            return item.title.includes("Listening");
          }),
        };
      case "Writing":
        return {
          ...state,
          filteredCourses: state.allCourses.filter((item) => {
            return item.title.includes("Writing");
          }),
        };
      case "Reading":
        return {
          ...state,
          filteredCourses: state.allCourses.filter((item) => {
            return item.title.includes("Reading");
          }),
        };
      case "General":
        return {
          ...state,
          filteredCourses: state.allCourses.filter((item) => {
            return item.title.includes("General");
          }),
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState());

  return (
    <div className="container">
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

      <div className={styles.cards}>
        {isPending && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {data &&
          state.filteredCourses.map((card, index) => {
            const colorIndex = card.id % 6;
            return (
              <div
                key={card.id}
                className={`${styles.card} ${styles[`card` + colorIndex]}`}
              >
                <div className={styles.firstPart}>
                  <div className={styles.cardHeader}>
                    <img src={card.img} alt="" />
                    <p>{card.level}</p>
                  </div>
                  <h3>{card.title}</h3>
                  <p className={styles.instructor}>{card.instructor}</p>
                </div>
                <div className={styles.secondPart}>
                  <p className={styles.description}>{card.description}</p>
                  <div className={styles.courseInfo}>
                    <small>
                      <img
                        src="/assets/time.png"
                        alt=""
                        className={styles.descImg}
                      />
                      {card.duration}
                    </small>
                    <small>
                      <img
                        src="/assets/graybook.png"
                        alt=""
                        className={styles.descImg}
                      />
                      {card.lessons} lessons
                    </small>
                    <small>
                      <img
                        src="/assets/gray-user.png"
                        alt=""
                        className={styles.descImg}
                      />
                      {card.students}
                    </small>
                  </div>
                  <div className={styles.ratingSection}>
                    <h3>
                      Rating: <span>{card.rating}</span>
                    </h3>
                    <h2>{card.price}</h2>
                  </div>
                  <button className={styles.btn}>
                    <img src="/assets/open-book.png" alt="" />
                    {card.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Cards;
