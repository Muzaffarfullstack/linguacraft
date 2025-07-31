import "./Reason.css";
import "../index.css";

function Reason() {
  return (
    <div className=" reason-container">
      <div className=" container reason-section">
        <div className="reason-text" data-aos="fade-right">
          <h1>Why Choose LinguaCraft?</h1>
          <div className="reason-card">
            <img src="/assets/target-white.png" alt="" />
            <div className="card-text">
              <h3>Personalized Learning</h3>
              <p>Adaptive lessons that match your pace and style</p>
            </div>
          </div>
          <div className="reason-card">
            <img src="/assets/users.png" alt="" />
            <div className="card-text">
              <h3>Global Community</h3>
              <p>Practice with native speakers from around the world</p>
            </div>
          </div>
          <div className="reason-card">
            <img src="/assets/rise.png" alt="" />
            <div className="card-text">
              <h3>Real Progress Tracking</h3>
              <p>See your improvement with detailed analytics</p>
            </div>
          </div>
          <div className="reason-card">
            <img src="/assets/award.png" alt="" />
            <div className="card-text">
              <h3>Certified Results</h3>
              <p>Earn recognized certificates for your achievements</p>
            </div>
          </div>
        </div>
        <div className="reason-video" data-aos="fade-left">
          <img src="/assets/play.png" alt="" />
          <div className="reason-details">
            <h1>See How It Works</h1>
            <p>Watch our 2-minute demo video</p>
          </div>
          <button>Play Demo Video</button>
        </div>
      </div>
    </div>
  );
}

export default Reason;
