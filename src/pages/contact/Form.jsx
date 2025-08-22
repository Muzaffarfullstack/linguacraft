import styles from "./Contact.module.css";
import "../../index.css";

function Form() {
  return (
    <section className="container">
      <div className={styles.formWrapper}>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <h2>Send us a Message</h2>
            <div className={styles.formHeader}>
              <label className={styles.firstLabel}>
                <h4>Name</h4>
                <input type="text" placeholder="Your full name" />
              </label>
              <label>
                <h4>Email</h4>
                <input type="email" placeholder="your@email.com" />
              </label>
            </div>
            <label>
              <select>
                <option value="select">Select a category</option>
                <option value="">General Inquiry</option>
                <option value="">Technical Support</option>
                <option value="">Billing & Payments</option>
                <option value="">Partnership</option>
                <option value="">Feedback</option>
              </select>
            </label>
            <label>
              <h5>Message</h5>
              <textarea placeholder="Tell us how we can help you..."></textarea>
            </label>
            <button>
              <img src="/assets/send.png" alt="" />
              Send Message
            </button>
          </form>
        </div>
        {/* second part */}
        <div className={styles.supportOptions}>
          <h1>How We Support You</h1>
          <div className={styles.supportBox}>
            <img src="/assets/headphone.png" alt="" />
            <div>
              <h2>24/7 Technical Support</h2>
              <p>
                Round-the-clock assistance for technical issues and platform
                navigation.
              </p>
            </div>
          </div>
          <div className={styles.supportBox}>
            <img src="/assets/users.png" alt="" />
            <div>
              <h2>Learning Community</h2>
              <p>
                Connect with fellow learners and get peer support in our active
                community.
              </p>
            </div>
          </div>
          <div className={styles.supportBox}>
            <img src="/assets/cam-recorder.png" alt="" />
            <div>
              <h2>Live Help Sessions</h2>
              <p>Join weekly live Q&A sessions with our expert instructors.</p>
            </div>
          </div>
          <div className={styles.supportBox}>
            <img src="/assets/open-book.png" alt="" />
            <div>
              <h2>Learning Resources</h2>
              <p>
                Access our comprehensive help center with guides and tutorials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
