import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import RegistrationLogin from "./components/RegistrationLogin";
import Main from "./components/Main";
import Volunteers from "./components/Volunteers";
import Housing from "./components/Housing";
import Chat from "./components/Chat";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [role, setRole] = useState("");

  return (
    <Router>
      <div className="App w-screen h-screen ">
        <Chat />
        <RegistrationLogin
          setIsLogin={setIsLogin}
          isLogin={isLogin}
          role={role}
        />
        <Routes>
          <Route
            path="/"
            element={<Main setIsLogin={setIsLogin} setRole={setRole} />}
          />
          <Route
            path="/donation"
            element={<Volunteers setIsLogin={setIsLogin} setRole={setRole} />}
          />
          <Route
            path="/housing"
            element={<Housing setIsLogin={setIsLogin} setRole={setRole} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
