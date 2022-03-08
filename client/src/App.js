import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import Container from "./components/UI/Container/Container";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="create-feedback" element={<Create />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
