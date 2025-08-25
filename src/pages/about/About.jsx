import "../../index.css";
import CoreValues from "./CoreValues";
import Description from "./Description";
import Mission from "./Mission";
import Team from "./Team";
import CallAction from "./CallAction";
import { useParams } from "react-router-dom";

function About() {
  const { title } = useParams();
  document.title = "About us";
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
