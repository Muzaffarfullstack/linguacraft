import styles from "./Auth.module.css";
import "../../index.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Signup() {
  const { title } = useParams();
  document.title = "Join in LinguaCraft";
  return (
    <div className={styles.background}>
      <div className="container">
        <form className={styles.form}>
          <h1>Join LinguaCraft</h1>
          <p>Start your English learning journey today</p>
          <div className={styles.formContainer}>
            <div className={styles.fullname}>
              <div className="firstname">
                <span className={styles.spaan}>First Name</span>
                <label>
                  <img src="/assets/singleuser.png" alt="" />
                  <input type="text" placeholder="First Name" />
                </label>
              </div>

              <div className={styles.lastname}>
                <span className={styles.spaan}>Last Name</span>
                <label>
                  <img src="/assets/singleuser.png" alt="" />
                  <input type="text" placeholder="Last Name" />
                </label>
              </div>
            </div>

            <div className={styles.email}>
              <span className={styles.spaan}>Email Address</span>
              <label className={styles.row}>
                <img src="/assets/mail.png" alt="" />
                <input type="text" placeholder="Enter your email" />
              </label>
            </div>

            <div className={styles.password}>
              <span className={styles.spaan}>Password</span>
              <label className={styles.row}>
                <img src="/assets/lock.png" alt="" />
                <input type="password" placeholder="Create a password" />
              </label>
            </div>

            <div className="confirm">
              <span className={styles.spaan}>Confirm Password</span>
              <label className={styles.row}>
                <img src="/assets/lock.png" alt="" />
                <input type="password" placeholder="Confirm your password" />
              </label>
            </div>
          </div>

          <button className={`${styles.createBtn} btn`}>
            Create Account <img src="/assets/arrow.png" alt="" />
          </button>
          <small>Or sign up with</small>

          <div className={styles.socialBtn}>
            <a href="">Google</a>
            <a href="">Facebook</a>
          </div>

          <p className={styles.foter}>
            Already have an account ?
            <Link to="/login" className={styles.signIn}>
              Sign in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
