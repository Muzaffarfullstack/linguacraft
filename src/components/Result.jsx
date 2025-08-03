import "./Result.css";
import "../index.css";

function Result({ score, total, onRestart }) {
  const recommendedCourse = () => {
    let course;
    switch (true) {
      case score <= 2:
        course =
          "We recommend you to start with" +
          "English Grammar Fundamentals va Conversational English";
        break;
      case score >= 3 && score <= 6:
        course =
          "We recommend you to start with" +
          " Advanced Vocabulary Builder va English Pronunciation Perfect";
        break;
      case score >= 7:
        course =
          "We recommend you Business English Mastery or IELTS Preparation Course";
        break;
      default:
        course = "No result found";
    }
    return course;
  };

  return (
    <div className="container result-container">
      <div className="result-text">
        <h1>Test Your Knowledge</h1>
        <p>Take our quick assessment to discover your English level</p>
      </div>
      <div className="result-section">
        <figure>
          <img src="../../public/assets/trophy-white.png" alt="truphy-white" />
        </figure>
        <span>Assassment Completed!</span>
        <p className="score">
          You got {score} out of {total}
        </p>
        <p className="result">{recommendedCourse()}</p>
        <button className="btn retake-btn" onClick={onRestart}>
          Retake Test
        </button>
        <button className="btn start-btn">Start Learning</button>
      </div>
    </div>
  );
}

export default Result;
