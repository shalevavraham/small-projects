import React, { useEffect, useState } from "react";
import User from "./user";
import "./style.css"


const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("Shalevavraham");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchGithubUserData = async () => {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName('')
    }

    console.log(data);
  };

  const HandelSubmit = () => {
    fetchGithubUserData()
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Usrer..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={(e) => HandelSubmit(e.target.value)}>Search</button>
      </div>
      {userData !== null ? <User user={userData}/> : null }
    </div>
  );
};

export default GithubProfileFinder;
