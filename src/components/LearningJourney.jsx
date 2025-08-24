import "./LearningJourney.css";
import "../index.css";

function LearningJourney() {
  return (
    <div className="journey-wrapper">
      <section className="container journey-container">
        <div className="journey-text">
          <h1>Your Learning Journey</h1>
          <p>Follow our proven 4-step method to fluency</p>
        </div>
        <div className="journey-cards">
          <div className="journey-card">
            <div className="journey-number">01</div>
            <div className="inner-card">
              <img src="/assets/brain-organ.png" alt="" />
              <h3>Choose Your Level</h3>
              <p>Take our assessment to find your starting point</p>
            </div>
            <div className="journey-progress">
              <div></div>
            </div>
          </div>
          <div className="journey-card">
            <div className="journey-number">02</div>
            <div className="inner-card">
              <img src="/assets/clock.png" alt="" />
              <h3>Daily Learning Plan</h3>
              <p>Get personalized lessons that fit your schedule</p>
            </div>
            <div className="journey-progress">
              <div></div>
            </div>
          </div>
          <div className="journey-card">
            <div className="journey-number">03</div>
            <div className="inner-card">
              <img src="/assets/users.png" alt="" />
              <h3>Practice & Community</h3>
              <p>Apply skills with real conversations and feedback</p>
            </div>
            <div className="journey-progress">
              <div></div>
            </div>
          </div>
          <div className="journey-card">
            <p className="journey-number">04</p>
            <div className="inner-card">
              <img src="/assets/award.png" alt="" />
              <h3>Certification & Goals</h3>
              <p>Earn certificates and achieve your language goals</p>
            </div>
            <div className="journey-progress">
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LearningJourney;
