import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Demo from "./components/Demo";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/demo" element={<Demo />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
