import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const ContentWriting = lazy(() =>
  import("./pages/ContentWriting/ContentWriting")
);
const Design = lazy(() => import("./pages/Design/Design"));
const DigitalBranding = lazy(() =>
  import("./pages/DigitalBranding/DigitalBranding")
);
const VideoStudio = lazy(() => import("./pages/VideoStudio/VideoStudio"));

const App = () => {
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/services/content-writing"
            element={<ContentWriting />}
          />
          <Route path="/services/design" element={<Design />} />
          <Route
            path="/services/digital-branding"
            element={<DigitalBranding />}
          />
          <Route path="/services/video-studio" element={<VideoStudio />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
