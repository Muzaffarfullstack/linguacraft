import Aos from "aos";
import "aos/dist/aos.css";

import "./MasterEnglish.css";
import "../index.css";
import { useEffect } from "react";

function MasterEnglish() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="main-container">
      <section className="container english-container">
        <div className="master-english">
          <div className="english-text" data-aos="fade-right">
            <h1>
              <span>Master English</span>
              <br /> With Confidence
            </h1>
            <p>
              Interactive lessons, personalized progress, and daily practise
              <br /> designed to make you fluent faster than ever before
            </p>
            <button className="btn btn-free">Get Started Free</button>
            <button className="btn btn-explore">Explore Feature</button>
          </div>
          <div className="english-card" data-aos="fade-left">
            <div className="card">
              <figure>
                <img src="/assets/new.png" alt="book" />
              </figure>
              <h1 className="englishCard-title">Interactive Lessons</h1>
              <p>
                Engaging content that adopts to your <br /> pace
              </p>
            </div>
            <div className="card">
              <figure>
                <img src="/assets/trophy.png" alt="trophy" />
              </figure>
              <h1 className="englishCard-title">Track Progress</h1>
              <p>See your improvement in real-time</p>
            </div>
            <div className="card">
              <figure>
                <img src="/assets/user.png" alt="user" />
              </figure>
              <h1 className="englishCard-title">Live Community</h1>
              <p>Practise with native speakers worldwide</p>
            </div>
            <div className="card">
              <figure>
                <img src="/assets/goal.png" alt="goal" />
              </figure>
              <h1 className="englishCard-title">Personalized Goals</h1>
              <p>Achieve milestones at your own pace</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MasterEnglish;
