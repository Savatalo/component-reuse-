import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Users from "./components/Users";
import Prices from "./components/Prices";
import axios from "axios";

const NavigationButtons = () => {
  const navigate = useNavigate();
  const getUser = () => {
    axios.get('https://randomuser.me/api/')
    .then(res => {
        console.log(res.data.results[0].name.first)
    }).catch(err => {
        console.log(err)
    })
}


  return (
    <div>
      <button className="switch-btn" onClick={() => navigate("/users")}>
        Users
      </button>
      <button className="switch-btn" onClick={() => navigate("/prices")}>
        Prices
      </button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div>
        <NavigationButtons />
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/prices" element={<Prices />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
