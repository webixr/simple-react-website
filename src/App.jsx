import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Project } from "./Pages";
import { Footer, Navbar } from "./Layouts";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<Project />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
