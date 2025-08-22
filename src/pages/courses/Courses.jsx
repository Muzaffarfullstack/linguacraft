import Cards from "./Cards";
import Explore from "./Explore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Courses() {
  const { title } = useParams();

  useEffect(() => {
    document.title = "Our Courses";
  }, [title]);

  return (
    <>
      <Explore />
      <Cards />
    </>
  );
}

export default Courses;
