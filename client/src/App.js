import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import Container from "./components/UI/Container/Container";
import Auth from "./components/Auth/Auth";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));

  // If a user is not logged in upon trying to access member features,
  // redirect them to sign in/sign up.
  const PrivateRoute = ({ user, children }) => {
    if (!user) return <Navigate to="/auth" replace />;
    return children;
  };

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="create-feedback"
            element={
              <PrivateRoute user={user}>
                <Create />
              </PrivateRoute>
            }
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
