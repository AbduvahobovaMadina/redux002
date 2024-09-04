import { Route, Routes } from "react-router-dom";
import Layout from "./companents/layout/Layout";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Auth />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
