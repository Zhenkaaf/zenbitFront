import "./App.css";

import { Outlet, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const Layout = () => {
    return (
      <>
        {/*  <Menu /> */}
        <Outlet />
      </>
    );
  };
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          /* path="/" */ element={<Home />}
        />
        <Route
          path="register"
          element={<Register />}
        />
        <Route
          path="login"
          element={<Login />}
        />

        {/* <Route
          path="error"
          element={<Error />}
        /> */}
      </Route>
    </Routes>
  );
}

export default App;
