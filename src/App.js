import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Roadmap from "./routes/Roadmap";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="roadmap" element={<Roadmap />} />
      <Route path="/" element={<Home />} />
      
    </Routes>
  );
}

export default App;
