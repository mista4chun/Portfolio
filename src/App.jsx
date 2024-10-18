import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Github from "./pages/Github";
import PageNotFound from "./pages/PageNotFound";
import Projects from "./pages/Projects";
import Sidebar from "./components/Sidebar";
import Side from "./components/Side";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Settings from "./pages/Settings";

function App() {
  return (
    <section className="grid h-screen grid-rows-[auto_1fr_auto]">
      <BrowserRouter>
        <Header />
        <div className="grid grid-cols-[auto_auto_1fr]">
          <Sidebar />
          <Side />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="github" element={<Github />} />
            <Route path="projects" element={<Projects />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;
