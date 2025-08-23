import "../index.css";
import "./ErrorPage.css";
import { useRouteError, Link } from "react-router-dom";

import Footer from "../components/Footer";

function ErrorPage() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <>
        <div className=" error-container">
          <div className="container">
            <h1 className="error-title">404</h1>
            <h2>Oops! Page Not Found</h2>
            <p className="first-paragraph">
              It looks like the page you're looking for doesn't exist. Don't
              worry, even <br /> the best learners sometimes take a wrong turn!
            </p>
            <Link className="btn back-home">
              <img src="/assets/arrow-back.png" alt="logo" /> Back to Home
            </Link>
            <div className="action-container">
              <h3>Here's what you can do instead:</h3>
              <div className="action-boxes">
                <div className="box">
                  <Link className="box-link" to="/">
                    <img src="/assets/home.png" alt="" />
                    <h5>Go Home</h5>
                    <p className="box-paragraph">
                      Return to the <br /> homepage
                    </p>
                  </Link>
                </div>
                <div className="box">
                  <Link className="box-link">
                    <img src="/assets/open-book.png" alt="" />
                    <h5>Browse Courses</h5>
                    <p className="box-paragraph">
                      Explore our learning <br /> materials
                    </p>
                  </Link>
                </div>
                <div className="box">
                  <Link className="box-link">
                    <img src="/assets/users.png" alt="" />
                    <h5>Join Community</h5>
                    <p className="box-paragraph">
                      Connect with other <br /> learners
                    </p>
                  </Link>
                </div>
                <div className="box">
                  <Link className="box-link">
                    <img src="/assets/chat.png" alt="" />
                    <h5>Get Help</h5>
                    <p className="box-paragraph">
                      Contact our support <br /> team
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="evrika">
              <h3>
                <img src="/assets/lightbulb.png" alt="" className="light" /> Did
                you know ?
              </h3>
              <p>
                Making mistakes is a crucial part of learning! Just like this
                404 error, every mistake is an opportunity to <br /> learn
                something new.
              </p>
            </div>
          </div>
        </div>
        <Footer />;
      </>
    );
  }

  return (
    <>
      <div className=" error-container">
        <div className="container">
          <h1 className="error-title">500</h1>
          <h2>Oops! Something went wrong</h2>
          <p className="first-paragraph">
            It looks like the page you're looking for doesn't exist. Don't
            worry, even <br /> the best learners sometimes take a wrong turn!
          </p>
          <Link className="btn back-home">
            <img src="assets/arrow-back.png" alt="logo" /> Back to Home
          </Link>
          <div className="action-container">
            <h3>Here's what you can do instead:</h3>
            <div className="action-boxes">
              <div className="box">
                <Link className="box-link" to="/">
                  <img src="/assets/home.png" alt="" />
                  <h5>Go Home</h5>
                  <p className="box-paragraph">
                    Return to the <br /> homepage
                  </p>
                </Link>
              </div>
              <div className="box">
                <Link className="box-link">
                  <img src="/assets/open-book.png" alt="" />
                  <h5>Browse Courses</h5>
                  <p className="box-paragraph">
                    Explore our learning <br /> materials
                  </p>
                </Link>
              </div>
              <div className="box">
                <Link className="box-link">
                  <img src="/assets/users.png" alt="" />
                  <h5>Join Community</h5>
                  <p className="box-paragraph">
                    Connect with other <br /> learners
                  </p>
                </Link>
              </div>
              <div className="box">
                <Link className="box-link">
                  <img src="../../public/assets/chat.png" alt="" />
                  <h5>Get Help</h5>
                  <p className="box-paragraph">
                    Contact our support <br /> team
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="evrika">
            <h3>
              <img src="/assets/lightbulb.png" alt="" className="light" /> Did
              you know ?
            </h3>
            <p>
              Making mistakes is a crucial part of learning! Just like this 404
              error, every mistake is an opportunity to <br /> learn something
              new.
            </p>
          </div>
        </div>
      </div>
      <Footer />;
    </>
  );
}

export default ErrorPage;
