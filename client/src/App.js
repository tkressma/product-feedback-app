import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSuggestions } from "./actions/suggestions";
import Container from "./components/UI/Container/Container";
import Main from "./components/Main/Main";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSuggestions());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <Main />
      </Container>
    </div>
  );
}

export default App;
