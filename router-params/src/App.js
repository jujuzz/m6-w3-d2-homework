import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  return (
    <Router>
      <h3>TV APPS</h3>
      <nav style={{ margin: 10 }}>
        <Link className="nf" to="/netflix" style={{ padding: 5 }}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg' alt="Netflix"/>
        </Link>
        <Link to="/hbo" style={{ padding: 5 }}>
        <img className="hb" src='https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg' alt="HBO"/>
        </Link>
        <Link className="hu" to="/hulu" style={{ padding: 5 }}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg' alt="Hulu"/>
        </Link>
        <Link className="pr" to="/prime" style={{ padding: 5 }}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png' alt="Prime"/>
        </Link>
      </nav>
      <Routes>
        <Route path=":id" element={<Child />} />
      </Routes>
    </Router>
  );
}

function Child() {
  const { id } = useParams();
  console.log('id: ' + id)
  return (
    <div>
      <h3>You Selected:<span>{id}</span></h3>
    </div>
  );
}