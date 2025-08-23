import "../../index.css";
import CoreValues from "./CoreValues";
import Description from "./Description";
import Mission from "./Mission";
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
    </section>
  );
}

export default About;
