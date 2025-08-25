import "./Quiz.css";
import "../index.css";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import Result from "./Result";
import { Toaster, toast } from "sonner";

function Quiz() {
  const {
    data: questions,
    isPending,
    error,
  } = useFetch("/data/questions.json");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [answerCount, setAnswerCount] = useState(0);
  const [isAnswer, setIsAnswer] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(1);

  if (questions && currentIndex >= questions.quizQuestions.length) {
    return (
      <Result
        score={answerCount}
        total={questions.quizQuestions.length}
        onRestart={() => {
          setCurrentIndex(0);
          setSelected("");
          setAnswerCount(0);
          setIsAnswer(false);
          setAnsweredQuestions(1);
        }}
      />
    );
  }

  const handleNextBtn = () => {
    if (!selected) {
      toast.error("Please selecte any option!");
      return;
    }

    if (questions && questions.quizQuestions[currentIndex]) {
      const correctAnswer = questions.quizQuestions[currentIndex].answer;
      if (selected === correctAnswer) {
        setAnswerCount(answerCount + 1);
      }
    }
    setCurrentIndex(currentIndex + 1);
    setSelected("");
    setIsAnswer(false);
    setAnsweredQuestions(answeredQuestions + 1);
  };
  return (
    <section className="container quiz-container">
      <div className="quiz-text" data-aos="fade-down">
        <h1>Test Your Knowledge</h1>
        <p>Take our quick assessment to discover your English level</p>
      </div>
      <div className="quiz-body" data-aos="fade-up">
        <div className="quiz-header">
          <div className="question-length">
            Question {answeredQuestions} of{" "}
            {questions ? questions.quizQuestions.length : 0}
          </div>
          <div className="quiz-progress">
            <div
              style={{
                width: (answeredQuestions / 10) * 100 + "%",
              }}
            ></div>
          </div>
          <img src="/assets/gray-timer.png" alt="timer" />
        </div>
        <div className="quiz-main">
          {isPending && <p>Loading...</p>}
          {error && { error }}
          {questions && (
            <div className="quiz-questions">
              <h3>{questions.quizQuestions[currentIndex].question}</h3>
              <ul>
                {questions.quizQuestions[currentIndex].options.map(
                  (option, index) => {
                    const alphabet = String.fromCharCode(65 + index);

                    let className = "";
                    const correctAnswer =
                      questions.quizQuestions[currentIndex].answer;

                    if (selected === option) {
                      className =
                        selected === correctAnswer ? "correct" : "incorrect";
                    }
                    return (
                      <li
                        key={index}
                        onClick={() => {
                          if (!isAnswer) {
                            setSelected(option);
                            setIsAnswer(true);
                          }
                        }}
                        className={`${className} parentContainer`}
                      >
                        <label className={`question-options`}>
                          <input
                            className="quiz-input"
                            type="radio"
                            value={option}
                            name={`question-${currentIndex}`}
                          />
                          <span>{alphabet}</span>
                          <p> {option}</p>
                          <img
                            src="/assets/check-mark.png"
                            alt="checkbox"
                            className="check"
                          />
                          <img
                            src="/assets/delete.png"
                            alt="delete"
                            className="delete"
                          />
                        </label>
                      </li>
                    );
                  }
                )}
              </ul>
              {/* <button>Submit</button> */}
              <button className="btn next-btn" onClick={handleNextBtn}>
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Quiz;
