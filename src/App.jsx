import Navbar from "./components/navbar";
import ErrorPage from "./pages/404notFound";
import About from "./pages/about";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobDetails from "./pages/jobDetails";
import JobApplication from "./pages/jobApplication";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/job-details/:id" element={<JobDetails />} />
        <Route path="/apply/:id" element={<JobApplication />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
  );
}

export default App;