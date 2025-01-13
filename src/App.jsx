import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Github from "./pages/Github";
import PageNotFound from "./pages/PageNotFound";
import Projects from "./pages/Projects";

import Settings from "./pages/Settings";
import AppLayout from "./ui/AppLayout";
import PageTitle from "./components/PageTitle";

function App() {
  return (
    <BrowserRouter>
      <PageTitle />
      <Routes>
        <Route element={<AppLayout />}>
        
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="github" element={<Github />} />
          <Route path="projects" element={<Projects />} />
          <Route path="settings" element={<Settings />} />
        </Route>
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
