import "../../index.css";
import CoreValues from "./CoreValues";
import Description from "./Description";
import Mission from "./Mission";
import Footer from "../../components/Footer";
import Team from "./Team";
import CallAction from "./CallAction";

function About() {
  return (
    <section>
      <Description />
      <Mission />
      <CoreValues />
      <Team />
      <CallAction />
      <Footer />
    </section>
  );
}

export default About;
