import React, { useEffect } from "react";
import { connectAdvanced, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getSuggestions } from "./actions/suggestions";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import Container from "./components/UI/Container/Container";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSuggestions());
  }, [dispatch]);

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create-feedback" element={<Create />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
