import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Backdrop from "./assets/backdrop.png";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div
            className="bg-cover bg-center h-screen flex justify-center items-center"
            style={{ backgroundImage: `url(${Backdrop})` }}
          >
            <Login />
          </div>
        }
      />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;