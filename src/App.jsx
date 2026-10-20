
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NovBannerPopup from "./components/novbannerpopup";

import Home from "./pages/Home";
import About from "./pages/About";
import Beliefs from "./pages/Beliefs";
import Ministries from "./pages/Ministries";
import WhatsHappening from "./pages/WhatsHappening";
import Sermons from "./pages/Sermons";
import Gallery from "./pages/Gallery";
import Give from "./pages/Give";
import PrayerRequest from "./pages/PrayerRequest";
import GetInTouch from "./pages/GetInTouch.jsx";

function App() {
  return (
    <div className="app">

  <NovBannerPopup />

  {/* SAME HEADER ON EVERY PAGE */}
  <Header />
      <main>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route
            path="/christian-beliefs"
            element={<Beliefs />}
          />

          <Route
            path="/ministries"
            element={<Ministries />}
          />

          <Route
            path="/whats-happening"
            element={<WhatsHappening />}
          />

          <Route
            path="/sermons"
            element={<Sermons />}
          />

          <Route
            path="/gallery"
            element={<Gallery />}
          />

          <Route
            path="/give"
            element={<Give />}
          />

          <Route
            path="/prayer-request"
            element={<PrayerRequest />}
          />

          <Route
            path="/get-in-touch"
            element={<GetInTouch />}
          />

        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;