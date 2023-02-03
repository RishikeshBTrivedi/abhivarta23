import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import FAQ from "./FAQ";
import Gallery from "./Gallery";
import Sponsors from "./Sponsors";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "./Loader";
import Register from "./Register";
import Team from "./Team";
import Events from "./Events";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <BrowserRouter>
      {loading ? (
        // <div className="loader-container">
        //   <div className="spinner"></div>
        // </div>
        <Loader></Loader>
      ) : (
        <Routes>
          {/* <Route path = "/" element = {<LandingPage/>}> */}
          <Route index path="/" element={<LandingPage />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/register" element={<Register />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          {/* </Route> */}
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
