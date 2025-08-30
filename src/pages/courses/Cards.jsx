import { useFetch } from "../../hooks/useFetch";
import "../../index.css";
import { Link } from "react-router-dom";
import styles from "./Course.module.css";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { useState } from "react";

function Cards() {
  const { data, isPending, error } = useFetch("/data/course.json");
  const { user } = useGlobalContext();

  return (
    <div className="container">
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className={styles.cardsContainer}>
        {data &&
          data.courses.map((course) => {
            return (
              <div key={course.id} className={styles.card}>
                <div
                  className={styles.firstPart}
                  style={{ background: course.color }}
                >
                  <img
                    src={course.icon}
                    alt={course.courseTitle}
                    className={styles.cardIcon}
                  />
                  <h2>{course.courseTitle}</h2>
                </div>
                <div className={styles.secondPart}>
                  <p>{course.details.description}</p>
                  <div>
                    <small className={styles.duration}>
                      {course.details.duration}
                    </small>
                    <small className={styles.price}>
                      {course.details.price}
                    </small>
                  </div>
                  <Link
                    to={`/courses/${course.courseTitle}`}
                    className={styles.courseBtn}
                    style={{ background: course.color }}
                  >
                    {course.details.action}
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Cards;
