import Creator from "../components/Creator";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import Learning from "../components/Learning";
import LearningJourney from "../components/LearningJourney";
import MasterEnglish from "../components/MasterEnglish";
import Quiz from "../components/Quiz";
import Reason from "../components/Reason";
import Stats from "../components/Stats";
import Trust from "../components/Trust";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Home() {
  const { title } = useParams();

  useEffect(() => {
    document.title = "LinguaCraft";
  }, [title]);

  return (
    <div>
      <MasterEnglish />
      <Trust />
      <Learning />
      <Creator />
      <LearningJourney />
      <Quiz />
      <Feedback />
      <Stats />
      <Reason />
      <Footer />
    </div>
  );
}

export default Home;
