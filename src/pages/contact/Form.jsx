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
              <div className={styles.formHead}>
                <span className={styles.title}>Name</span>
                <label className={styles.formLabel}>
                  <input type="text" placeholder="Your full name" />
                </label>
              </div>

              <div className={`${styles.formHead} ${styles.formEmail}`}>
                <span className={styles.title}>Email</span>
                <label className={styles.formLabel}>
                  <input type="email" placeholder="your@email" />
                </label>
              </div>
            </div>

            <div className={styles.category}>
              <span className={styles.title}>Category</span>
              <label>
                <select className={styles.categoryForm}>
                  <option value="">Select a category</option>
                  <option value="">General Inquiry</option>
                  <option value="">Technical Support</option>
                  <option value="">Billing & Payments</option>
                  <option value="">Partnership</option>
                  <option value="">Feedback</option>
                </select>
              </label>
            </div>

            <div>
              <span className={styles.title}>Message</span>
              <textarea placeholder="Tell us how we can help you..."></textarea>
            </div>

            <button className={`${styles.formBtn}`}>
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
