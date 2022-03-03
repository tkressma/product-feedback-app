import React, { useEffect } from "react";
import { connectAdvanced, useDispatch } from "react-redux";
import { getSuggestions } from "./actions/suggestions";
import Home from "./components/Home/Home";
import Container from "./components/UI/Container/Container";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSuggestions());
  }, [dispatch]);

  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
