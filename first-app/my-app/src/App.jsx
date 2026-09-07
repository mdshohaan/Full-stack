import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import ClockPage from "./pages/ClockPage";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/clock" element={<ClockPage />} />
        <Route path="/task" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
