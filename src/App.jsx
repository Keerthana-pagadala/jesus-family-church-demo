

import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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

const seoData = {
  "/": {
    title: "Jesus Family Church Australia | Christian Church in Melbourne",
    description:
      "Welcome to Jesus Family Church Australia, a multicultural Christian church in Thomastown, Melbourne. Join us for worship, prayer, fellowship and spiritual growth."
  },
  "/about": {
    title: "About Us | Jesus Family Church Australia",
    description:
      "Learn about Jesus Family Church Australia, our faith, mission and vision to bring people together through Christ in Melbourne."
  },
  "/christian-beliefs": {
    title: "Our Christian Beliefs | Jesus Family Church Australia",
    description:
      "Discover the Christian beliefs and faith that guide Jesus Family Church Australia and our community in Melbourne."
  },
  "/ministries": {
    title: "Church Ministries | Jesus Family Church Australia",
    description:
      "Explore our church ministries for children, youth, men and women at Jesus Family Church Australia in Thomastown, Melbourne."
  },
  "/whats-happening": {
    title: "Church Events and Activities | Jesus Family Church Australia",
    description:
      "Find upcoming church events, Sunday services, Bible studies, prayer meetings and fellowship activities in Melbourne."
  },
  "/sermons": {
    title: "Sermons and Messages | Jesus Family Church Australia",
    description:
      "Watch sermons and Bible messages from Jesus Family Church Australia and grow in your Christian faith."
  },
  "/gallery": {
    title: "Church Photo Gallery | Jesus Family Church Australia",
    description:
      "Explore photos of worship services, church gatherings, fellowship and community life at Jesus Family Church Australia."
  },
  "/give": {
    title: "Give and Support Our Church | Jesus Family Church Australia",
    description:
      "Learn how to support the ministry and mission of Jesus Family Church Australia through giving."
  },
  "/prayer-request": {
    title: "Prayer Request | Jesus Family Church Australia",
    description:
      "Share your prayer request with Jesus Family Church Australia. We would be glad to pray with you."
  },
  "/get-in-touch": {
    title: "Contact Us | Jesus Family Church Australia",
    description:
      "Contact Jesus Family Church Australia in Thomastown, Melbourne. Find our location, service information and contact details."
  }
};

function SEOManager() {
  const location = useLocation();

  useEffect(() => {
    const page = seoData[location.pathname] || seoData["/"];

    document.title = page.title;

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }

    description.setAttribute("content", page.description);

    let ogTitle = document.querySelector(
      'meta[property="og:title"]'
    );

    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }

    ogTitle.setAttribute("content", page.title);

    let ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );

    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }

    ogDescription.setAttribute("content", page.description);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <div className="app">
      <SEOManager />

      <NovBannerPopup />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/christian-beliefs" element={<Beliefs />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/whats-happening" element={<WhatsHappening />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/give" element={<Give />} />
          <Route path="/prayer-request" element={<PrayerRequest />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
