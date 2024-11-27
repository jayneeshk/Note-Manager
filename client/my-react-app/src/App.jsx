import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";
import About from "./components/About";
import Navbar from "./components/Navbar";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    
    <Router>
      <Navbar></Navbar>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<About />} /> 
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/notes" element={<Notes />} />
            <Route path="/create" element={<CreateNote/>} />
            <Route path="/edit/:id" element={<EditNote/>} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
