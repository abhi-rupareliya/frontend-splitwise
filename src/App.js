import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Auth";
import "./index.css";
import Navigationbar from "./Components/Navigationbar";

function App() {
  return (
    <BrowserRouter>
      <Navigationbar />
      <Routes>
        <Route path='/' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
