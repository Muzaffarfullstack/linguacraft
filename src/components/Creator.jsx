import "./Creator.css";
import "../index.css";

function Creator() {
  return (
    <section className="container ceo" data-aos="zoom-in">
      <div className="creator">
        {/* <div className="modal"></div> */}
        <div className="overlay"></div>
        <img src="../../play.png" alt="" />
      </div>
      <div className="creator-text">
        <h2>
          "I created this platform so every learner feels seen, supported, and
          successful."
        </h2>
        <p>Muzaffar Nematjonov, Founder & CEO</p>
      </div>
    </section>
  );
}

export default Creator;
