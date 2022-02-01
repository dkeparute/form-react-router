import { BrowserRouter, Routes, Route } from "react-router-dom";
// import route components
import LogIn from "./Components/LogIn";
import Forgot from "./Components/Forgot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
