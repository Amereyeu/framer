import React from "react";
import { RiArrowRightSLine, RiAddLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

function LessonDetail({ lesson, index, toggleLesson }) {
  var bgImage = {
    backgroundImage: `url(${lesson.image})`,
  };

  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 2,
      },
    },
    exit: { opacity: 0 },
  };

  const titleVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.1,
      },
    },
  };

  const slideVariants = {
    initial: { opacity: 0, height: 0 },
    animate: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 1,
      },
      overflow: "hidden",
    },
  };

  const categoryVariants = {
    style: { overflow: "hidden" },
    initial: { opacity: 0, x: "-100vw" },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      x: "-100vw",
      transition: {
        duration: 1,
      },
    },
  };

  const mainVariants = {
    style: { overflow: "hidden" },
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  const headerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
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

  const priceVariants = {
    initial: { scale: 0.3, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 5,
      },
    },
  };

  const noteVariants = {
    initial: { scale: 0.3, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 5,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div key={index} onClick={() => toggleLesson(index)}>
        <div className="course" style={bgImage}>
          <motion.div
            className="course__title"
            variants={titleVariants}
            whileHover="hover"
          >
            {lesson.title}
          </motion.div>
        </div>

        <AnimatePresence>
          {lesson.open && (
            <motion.div
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="info">
                <motion.h5
                  className="info__category"
                  variants={categoryVariants}
                >
                  {lesson.category}
                </motion.h5>

                <motion.p className="info__main" variants={mainVariants}>
                  {lesson.main_text}
                </motion.p>

                <div className="fle">
                  <div className="info__highlights">
                    <motion.h3
                      className="info__highlights__title"
                      variants={headerVariants}
                    >
                      {lesson.highlights_title}
                    </motion.h3>

                    <motion.ul
                      className="info__highlights__list"
                      variants={lessonsVariants}
                    >
                      {lesson.highlights.map((item, i) => (
                        <motion.li
                          className="info__highlights__list__item"
                          key={i}
                          variants={itemsVariants}
                        >
                          <RiAddLine /> {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  <div className="info__requirements">
                    <motion.h3
                      className="info__requirements__title"
                      variants={headerVariants}
                    >
                      {lesson.requirements_title}
                    </motion.h3>

                    <motion.ul
                      className="info__requirements__list"
                      variants={lessonsVariants}
                    >
                      {lesson.requirements.map((item, i) => (
                        <motion.li
                          className="info__requirements__list__item"
                          key={i}
                          variants={itemsVariants}
                        >
                          <RiArrowRightSLine /> {item}
                        </motion.li>
                      ))}
                    </motion.ul>

                    <motion.div
                      className="info__requirements__price"
                      variants={priceVariants}
                    >
                      <h4>
                        <em>{lesson.price}</em>
                      </h4>
                    </motion.div>
                  </div>
                </div>

                <motion.div className="info__note" variants={noteVariants}>
                  <p>
                    Praesent dapibus, neque id cursus faucibus, tortor neque
                    egestas auguae, eu vulputate magna eros eu erat. Aliquam
                    erat volutpat. Nam dui mi, tincidunt quis, accumsan
                    porttitor, facilisis luctus, metus.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default LessonDetail;
