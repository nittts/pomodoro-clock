import { Routes, Route } from "react-router-dom";
import Clock from "../pages/Clock";
import History from "../pages/History";
import Home from "../pages/Home";

function Router() {
  return (
    <Routes>
      <Route path={""} element={<Home />}>
        <Route path={"/history"} element={<History />} />
        <Route path={""} element={<Clock />} />
      </Route>
    </Routes>
  );
}

export default Router;
