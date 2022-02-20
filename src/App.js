import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./pages/About/About";

const Home = lazy(() => import("./pages/Home/Home"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router basename="/atza/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
