import React, { useEffect } from "react";
import { connectAdvanced, useDispatch } from "react-redux";
import { getSuggestions } from "./actions/suggestions";
import Main from "./components/Main/Main";
import ControlCenter from "./components/ControlCenter/ControlCenter";
import Container from "./components/UI/Container/Container";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSuggestions());
  }, [dispatch]);

  return (
    <Container>
      <ControlCenter />
      <Main />
    </Container>
  );
}

export default App;
