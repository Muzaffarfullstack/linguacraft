import "./Feedback.css";
import "../index.css";
import { useFetch } from "../hooks/useFetch";

function Feedback() {
  const { data, isPending, error } = useFetch("/data/db.json");

  return (
    <div className="feedback-container">
      <div className="feedback-wrapper container">
        <div className="feedback-text" data-aos="fade-up">
          <h1>What Our Community Says</h1>
          <p>Real stories from real learners around the world</p>
        </div>
        <div className="feedback-cards">
          {isPending && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {data && (
            <div className="testimonial-wrapper">
              <div
                className="testimonial-card card-large"
                data-aos="fade-right"
              >
                <div>
                  <img src="/assets/person.png" alt="" className="main-image" />
                </div>
                <div>
                  <img
                    src="/assets/stars.png"
                    alt=""
                    className="rating-image"
                  />
                  <p>{data.testimonials[0].text}</p>
                  <h1>{data.testimonials[0].name}</h1>
                  <img
                    src="/assets/location-1.png"
                    alt=""
                    className="location-image"
                  />
                  <span>{data.testimonials[0].location}</span>
                </div>
              </div>
              <div className="side-cards">
                {data.testimonials.slice(1, 3).map((item) => (
                  <div
                    key={item.id}
                    className="testimonial-card side-card"
                    data-aos="fade-left"
                  >
                    <div className="side-card-header">
                      <img
                        src="/assets/person.png"
                        alt="logo"
                        className="side-person"
                      />
                      <div>
                        <h1>{item.name}</h1>
                        <img
                          src="/assets/location-1.png"
                          alt=""
                          className="location-image"
                        />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <img
                      src="/assets/stars.png"
                      alt=""
                      className="rating-image-2"
                    />
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Feedback;
