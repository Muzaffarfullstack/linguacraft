import styles from "./Contact.module.css";
import "../../index.css";

function ContactHeader() {
  return (
    <div className="container">
      <div className={styles.text}>
        <h1>Get in Touch</h1>
        <p>
          Have questions about your English learning journey? We're here to help
          you succeed <br /> every step of the way.
        </p>
      </div>

      <div className={styles.contactBoxes}>
        <div className={styles.contactBox}>
          <img src="/assets/whitemail.png" alt="" className={styles.firstBox} />
          <h3>Email Support</h3>
          <p>Get help within 24 hours</p>
          <span>help.linguacraft@gmail.com</span>
        </div>

        <div className={styles.contactBox}>
          <img
            src="/assets/whitecall.png"
            alt=""
            className={styles.secondBox}
          />
          <h3>Phone Support</h3>
          <p>Mon-Fri, 9AM-6PM EST</p>
          <span>+371 2781 9722</span>
        </div>

        <div className={styles.contactBox}>
          <img src="/assets/chat.png" alt="" className={styles.thirdBox} />
          <h3>Live Chat</h3>
          <p>Available 24/7</p>
          <span>Start Chat</span>
        </div>

        <div className={styles.contactBox}>
          <img
            src="/assets/whitelocation.png"
            alt=""
            className={styles.fourthBox}
          />
          <h3>Office Location</h3>
          <p>Visit us in person</p>
          <span>Currently we work online</span>
        </div>
      </div>
    </div>
  );
}

export default ContactHeader;
