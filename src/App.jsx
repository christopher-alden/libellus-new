import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/footer/Footer";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Courses from "./pages/Courses";
// import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/" element={<Home />} />
        <Route exact path="/details/:category/:id" element={<About/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/courses" element={<Courses/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
