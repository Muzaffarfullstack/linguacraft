import styles from "./Auth.module.css";
import "../../index.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={styles.background}>
      <div className="container">
        <form className={`${styles.form} ${styles.loginForm}`}>
          <h1>Welcome Back!</h1>
          <p>Sign in to continue your English learning journey</p>

          <div className={styles.formContainer}>
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

            <Link className={styles.resetPassword}>Forgot password?</Link>
          </div>

          <button className={`${styles.createBtn} btn`}>
            Sign In <img src="/assets/arrow.png" alt="" />
          </button>
          <small>Or continue with</small>

          <div className={styles.socialBtn}>
            <a href="">Google</a>
            <a href="">Facebook</a>
          </div>

          <p className={styles.foter}>
            Don't have an account ?
            <Link to="login" className={styles.signIn}>
              Sign up for free
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
