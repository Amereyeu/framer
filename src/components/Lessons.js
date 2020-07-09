import React, { useState, useContext } from "react";
import CourseDetail from "./LessonDetail";
import { CourseContext } from "../context/CourseContext";
import { motion } from "framer-motion";

function Lessons() {
  const { courses } = useContext(CourseContext);
  const [lessons, setLessons] = useState(courses);

  const toggleLesson = (index) => {
    setLessons(
      lessons.map((lesson, i) => {
        if (i === index) {
          lesson.open = !lesson.open;
        } else {
          lesson.open = false;
        }

        return lesson;
      })
    );
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const lessonsVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 2,
      },
    },
  };

  const itemsVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.div
      className="courses"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.ul className="courses__list" variants={lessonsVariants}>
        {lessons.map((lesson, i) => (
          <motion.li key={i} variants={itemsVariants}>
            <CourseDetail
              lesson={lesson}
              index={i}
              toggleLesson={toggleLesson}
              key={i}
            />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default Lessons;
