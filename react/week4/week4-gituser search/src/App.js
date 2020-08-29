/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React, { useState, useEffect } from "react";
import "./styles.css";
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setLoading(true);
    if (search !== "") {
      fetch(`https://api.github.com/search/users?q=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setUsers(data.items);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [search]);
  return (
    <div className="App">
      <h1>Github User Lists</h1>
      <input
        type="text"
        placeholder="Search Users"
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <p>Loading Users...</p>
      ) : (
        <ul>
          {users === undefined
            ? "No results"
            : users.map((user) => {
                return <LoginDetail {...user} />;
              })}
        </ul>
      )}
    </div>
  );
}

const LoginDetail = (props) => {
  const { id, login, avatar_url } = props;
  return (
    <ul key={id}>
      <img
        src={avatar_url}
        alt={login}
        style={{ width: "20px", height: "20px" }}
      />
      <p>{login}</p>
    </ul>
  );
};

export default App;
