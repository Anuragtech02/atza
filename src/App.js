import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const ContentWriting = lazy(() =>
  import("./pages/ContentWriting/ContentWriting")
);

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
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
