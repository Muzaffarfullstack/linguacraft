import "./Learning.css";
import "../index.css";

function Learning() {
  return (
    <div className="learning-path">
      <div className="learn-path_container container">
        <div className="path-text" data-aos="fade-down">
          <h1>Choose Your Learning Path</h1>
          <p>Structured courses designed for every skill level</p>
        </div>
        <div className="path-cards" data-aos="fade-up">
          <div className="path-card">
            <figure>
              {/* <img src="../../public/assets/open-book.png" alt="book" /> */}
            </figure>
            <h3>Beginner</h3>
            <p>A1-A2 Level</p>
            <div className="progress">
              <span>Progress</span>
              <span>40%</span>
            </div>
            <div className="progress-bar">
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="path-card">
            <figure>
              {/* <img src="../../public/assets/chat.png" alt="chat" /> */}
            </figure>
            <h3>Intermediate</h3>
            <p>B1-B2 Level</p>
            <div className="progress">
              <span>Progress</span>
              <span>70%</span>
            </div>
            <div className="progress-bar">
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="path-card">
            <figure>
              {/* <img src="../../public/assets/trophy-white.png" alt="trophy" /> */}
            </figure>
            <h3>Business English</h3>
            <p>Professional</p>
            <div className="progress">
              <span>Progress</span>
              <span>90%</span>
            </div>
            <div className="progress-bar">
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="path-card">
            <figure>
              {/* <img
                src="../../public/assets/target-white.png"
                alt="target-gaol"
              /> */}
            </figure>
            <h3>IELTS Prep</h3>
            <p>Test Ready</p>
            <div className="progress">
              <span>Progress</span>
              <span>55%</span>
            </div>
            <div className="progress-bar">
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learning;
