import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./App.scss";

import { CourseProvider } from "./context/CourseContext";

function App() {
  const location = useLocation();
  return (
    <CourseProvider>
      <div className="App">
        <Nav />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </AnimatePresence>
        <Footer />
      </div>
    </CourseProvider>
  );
}

export default App;
