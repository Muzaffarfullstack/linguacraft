import "../../index.css";
import "./CourseDetails.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import CourseContent from "./CourseContent";

function CourseDetail() {
  const { data, isPending, error } = useFetch("/data/course.json");
  const [openAccardion, setOpenAccardion] = useState(true);

  // center section video
  const { title } = useParams();
  const selectedCourse = data?.courses.find(
    (course) => course.courseTitle === title
  );

  // theme of course for left side layout
  const lessons =
    selectedCourse && selectedCourse.details
      ? selectedCourse.details.lessons
      : [];

  // additional details for right side layout
  const additionalDetails = selectedCourse
    ? selectedCourse.additionalDetails
    : selectedCourse;

  // console.log(additionalDetails);

  const handleAccardion = () => {
    if (openAccardion) {
      setOpenAccardion(false);
    } else {
      setOpenAccardion(true);
    }
  };

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="container courseDetails">
      {/* course content left side */}
      <div className="course-content">
        <h2>Course content</h2>
        <div className="course-progress">
          <div className="progress-stat">
            <small>Progress</small>
            <strong>10%</strong>
          </div>
          <div className="course-progress-bar">
            <div></div>
          </div>
          <p className="course-counter">1 of 10 lessons completed</p>
        </div>

        <div className="course-accardion">
          <div className="accardion-toggle">
            <button
              className={`${
                openAccardion ? "accardionVisible" : "accardionHide"
              }`}
              onClick={handleAccardion}
            >
              <span>{selectedCourse?.courseTitle}</span>
              {openAccardion && (
                <img src="/assets/arrow-down-sign-to-navigate.png" alt="" />
              )}
              {!openAccardion && <img src="/assets/up-arrows.png" alt="" />}
            </button>
            <div
              className={`themeContainer ${
                openAccardion ? "openaccardion" : "accardionClose"
              }`}
            >
              {lessons &&
                lessons.map((lesson) => {
                  return (
                    <div key={lesson.id} className="accardion-theme">
                      <p>{lesson.videoTitle}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      {/* video content center */}
      <div className="course-video">
        {isPending && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {selectedCourse && <CourseContent content={selectedCourse} />}
      </div>
      {/* left side additional details */}
      <div className="course-info">
        <h2>This course includes</h2>

        {additionalDetails &&
          additionalDetails.includes.map((detail, index) => {
            return (
              <div key={`${index}-${detail}`} className="right-side">
                <figure className="course-content__figure">
                  <img src={detail.icon} alt={detail.text} />
                  <p>{detail.text}</p>
                </figure>
              </div>
            );
          })}

        <div className="certificate-container">
          <div className="certificate-header">
            <img
              src={additionalDetails && additionalDetails.certificate.icon}
              alt="icon"
            />
            <p>
              {additionalDetails && additionalDetails.certificate.available}
            </p>
          </div>
          <p className="certificate-text">
            {additionalDetails && additionalDetails.certificate.text}
          </p>
          <small className="certificate-footer">
            {additionalDetails && additionalDetails.certificate.progressText}
          </small>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
