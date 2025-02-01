import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeSection from "./modules/HomeSection/HomeSection.jsx";
import ResumeSection from "./modules/AboutmeSection/ResumeSection.jsx";
import NavSection from "./modules/Nav/Nav.jsx";
import ProjectSection from "./modules/ProjectSection/ProjectSection.jsx";
import Loader from "./modules/Loader/Loader.jsx";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <div className="app">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

        <div className={`app__container ${isLoading ? "invisible" : "visible"}`}>
          <section>
            <NavSection />
          </section>
          <section>
            <Routes>
              <Route path="/" element={<HomeSection />} />
              <Route path="/projects" element={<ProjectSection />} />
              <Route path="/aboutme" element={<ResumeSection />} />
            </Routes>
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
