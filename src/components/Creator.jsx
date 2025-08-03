import "./Creator.css";
import "../index.css";
import { useState, useEffect } from "react";

function Creator() {
  const [isModal, setIsModal] = useState(false);

  // function for modal
  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
    const iframe = document.querySelector("iframe");
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModal]);

  return (
    <section className="container ceo" data-aos="zoom-in">
      <div className="creator">
        <div className="overlay-section">
          <div className={`overlay ${isModal ? "showOverlay" : ""}`}>
            <div className="modal-content">
              <img
                src="assets/play.png"
                alt=""
                className="overlay-play-btn"
                onClick={() => {
                  playVideo();
                }}
              />
              <iframe
                src="https://www.youtube.com/embed/wexzvClUcUk?si=u4CWGvhIHWolDZE9"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          {isModal && (
            <img
              src="/assets/delete2.png"
              alt=""
              className="video-closer"
              onClick={closeModal}
            />
          )}
        </div>
        <img
          src="../../play.png"
          alt=""
          className="play-button"
          onClick={() => {
            openModal();
          }}
        />
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
