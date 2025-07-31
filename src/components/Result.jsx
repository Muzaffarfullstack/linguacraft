import "./Result.css";
import "../index.css";

function Result({ score, total, onRestart }) {
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
        <p>
          Based on your answers, we recommend you starting with our Intermediate
          course
        </p>
        <button className="btn retake-btn" onClick={onRestart}>
          Retake Test
        </button>
        <button className="btn start-btn">Start Learning</button>
      </div>
    </div>
  );
}

export default Result;
