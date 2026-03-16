import { useCallback, useState } from "react";
import Search from "./Search";
import "./App.css";
const allUsers = ["john", "alex", "george", "simon", "james"];

const App = () => {
  const [users, setUsers] = useState(allUsers);

  const shuffle = (arr) => {
    const copy = [...arr];

    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
  };
  const handleSearch = useCallback(
    (text) => {
      console.log(users[0]);

      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    [users],
  );

  return (
    <div className="app">
      <div className="">
        <button className="btn" onClick={() => setUsers(shuffle(allUsers))}>
          Shuffle
        </button>

        <Search onChange={handleSearch} />
      </div>
      <ul className="list">
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
