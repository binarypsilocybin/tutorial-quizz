import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Settings />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/score" element={<FinalScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
