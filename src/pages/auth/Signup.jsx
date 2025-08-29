import styles from "./Auth.module.css";
import "../../index.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      toast.error("Please fill all fields");
      return;
    }
    console.log({ firstName, lastName, email, password, confirmPassword });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const { title } = useParams();
  document.title = "Join in LinguaCraft";

  return (
    <div className={styles.background}>
      <div className="container">
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Join LinguaCraft</h1>
          <p>Start your English learning journey today</p>
          <div className={styles.formContainer}>
            <div className={styles.fullname}>
              <div className="firstname">
                <span className={styles.spaan}>First Name</span>
                <label>
                  <img src="/assets/singleuser.png" alt="" />
                  <input
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                </label>
              </div>

              <div className={styles.lastname}>
                <span className={styles.spaan}>Last Name</span>
                <label>
                  <img src="/assets/singleuser.png" alt="" />
                  <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </label>
              </div>
            </div>

            <div className={styles.email}>
              <span className={styles.spaan}>Email Address</span>
              <label className={styles.row}>
                <img src="/assets/mail.png" alt="" />
                <input
                  type="text"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </label>
            </div>

            <div className={styles.password}>
              <span className={styles.spaan}>Password</span>
              <label className={styles.row}>
                <img src="/assets/lock.png" alt="" />
                <input
                  type="password"
                  placeholder="Create a password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </label>
            </div>

            <div className="confirm">
              <span className={styles.spaan}>Confirm Password</span>
              <label className={styles.row}>
                <img src="/assets/lock.png" alt="" />
                <input
                  type="password"
                  placeholder="Confirm your password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
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
