// import { useParams } from "react-router-dom";
import { act, useState } from "react";

function CourseContent({ content }) {
  const {
    courseTitle,
    details: {
      duration,
      timeIcon,
      lessonIcon,
      description,
      extraDescription,
      extraAdvantageIcon,
      advantages,
      lessons,
    },
  } = content;

  const [activeVideo, setActiveVideo] = useState(0);
  // console.log(content);

  return (
    <div className="courseContentWrapper">
      <h1 className="course-title">{courseTitle}</h1>
      <p className="course-description">{description}</p>

      <div className="lesson-details">
        <figure className="course-content__pic">
          <img src={timeIcon} alt="" />
          <p>15 hours total</p>
        </figure>
        <figure className="course-content__pic">
          <img src={lessonIcon} alt="time" />
          <p>{lessons.length} lessons</p>
        </figure>
      </div>

      {
        <div>
          <h2 className="lesson-title">{lessons[activeVideo].videoTitle}</h2>
          <iframe
            src={lessons[activeVideo].videoUrl}
            frameBorder="0"
            width={600}
            height={350}
          ></iframe>

          <div className="about-this-course">
            <h1>About This Course</h1>
            <p>{extraDescription}</p>
            <h4>What You'll Learn</h4>

            <div className="extra-advantage-begin">
              {advantages &&
                advantages.map((item, index) => {
                  return (
                    <div className="extra-advantage" key={`${index}-${item}`}>
                      <img src={extraAdvantageIcon} alt="" />
                      {item}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default CourseContent;
