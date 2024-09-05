import { Route, Routes } from "react-router-dom";
import Layout from "./companents/layout/layout";
import Home from "./pages/home/home.jsx";
import Login from "./pages/login/login";
import Auth from "./pages/auth/auth";

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
