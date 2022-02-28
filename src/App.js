import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const ContentWriting = lazy(() =>
  import("./pages/ContentWriting/ContentWriting")
);
const Design = lazy(() => import("./pages/Design/Design"));
const Events = lazy(() => import("./pages/Events/Events"));
const VideoStudio = lazy(() => import("./pages/VideoStudio/VideoStudio"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router basename="/atza/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/services/content-writing"
            element={<ContentWriting />}
          />
          <Route path="/services/design" element={<Design />} />
          <Route path="/services/events" element={<Events />} />
          <Route path="/services/video-studio" element={<VideoStudio />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
