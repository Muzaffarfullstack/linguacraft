import styles from "./Contact.module.css";
import "../../index.css";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

function Faq() {
  const { data, isPending, error } = useFetch("/data/faq.json");
  const [answerOpen, setAnswerOpen] = useState(false);
  const [openId, setOpenId] = useState(null);

  const checkId = (id) => {
    if (openId === id) {
      setOpenId(null);
      //   setAnswerOpen(false);
    } else {
      setOpenId(id);
      //   setAnswerOpen(true);
    }
  };

  return (
    <div className="container">
      <div className={styles.questions}>
        <div className={styles.questionsHeader}>
          <h1>Frequently Asked Questions</h1>
          <p>Find quick answers to common questions about LinguaCraft</p>
        </div>

        <div className="accardion">
          {isPending && <p>Loading...</p>}
          {error && <p>{error.message}</p>}
          {data &&
            data.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div key={item.id} className={styles.question}>
                  <div
                    className={`${
                      answerOpen ? styles.questionSection : styles.questionOpen
                    }`}
                    onClick={() => checkId(item.id)}
                  >
                    <h3>{item.question}</h3>
                    {isOpen ? (
                      <img src="/assets/up-arrows.png" alt="" />
                    ) : (
                      <img
                        src="/assets/arrow-down-sign-to-navigate.png"
                        alt=""
                      />
                    )}
                  </div>

                  {openId === item.id && <p>{item.answer}</p>}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Faq;
