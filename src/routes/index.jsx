import { Routes, Route } from "react-router-dom";
import Episode from "../pages/Episode";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/episodes" element={<Episode />} />
    </Routes>
  );
}

export default AppRoutes;
