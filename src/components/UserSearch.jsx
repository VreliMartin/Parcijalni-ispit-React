import { useState } from "react";
import UserDetails from "./UserDetails";

const UserSearch = () => {
  const [text, setText] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter a correct username");
    } else {
      try {
        const userRes = await fetch(`https://api.github.com/users/${text}`);
        const userData = await userRes.json();
        setUserData(userData);

        const reposRes = await fetch(userData.repos_url);
        const reposData = await reposRes.json();
        setRepos(reposData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
      setText("");
    }
  };

  const handleReset = () => {
    setUserData(null);
    setRepos([]);
  };

  return (
    <div className="userSearch">
      <div className="inputForm">
        <form onSubmit={handleSubmit}>
          <input
            className="searchInput"
            type="text"
            placeholder="Search user..."
            onChange={handleChange}
            value={text}
          />
          <button type="submit">Search</button>
        </form>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
      {userData && <UserDetails userData={userData} repos={repos} />}
    </div>
  );
};

export default UserSearch;
