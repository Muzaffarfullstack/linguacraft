import Form from "./Form";
import ContactHeader from "./ContactHeader";
import Faq from "./Faq";
import { useParams } from "react-router-dom";

function Contact() {
  const { title } = useParams();
  document.title = "Help Center";
  return (
    <section>
      <ContactHeader />
      <Form />
      <Faq />
    </section>
  );
}

export default Contact;
