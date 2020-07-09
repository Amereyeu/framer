import React, { useState, useEffect, createContext } from "react";

export const CourseContext = createContext();

export const CourseProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);

      const res = await fetch("./data.json");
      const courses = await res.json();

      setCourses(courses);
      setIsLoading(false);
    };

    fetchCourses();
  }, []);

  return (
    <CourseContext.Provider
      value={{
        courses,
        isLoading,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};
