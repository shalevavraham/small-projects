import React, { useEffect, useState } from "react";
import Suggesstions from "./suggesstions";
import "./style.css";


const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilterdUsers] = useState([]);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilterdUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleClick = (event) => {
    console.log(event.target.innerText);
    setShowDropdown(false)
    setSearchParam(event.target.innerText)
    setFilterdUsers([])
  }

  const fetchListOfUsers = async () => {
    try {
        setLoading(true);
      const respons = await fetch("https://dummyjson.com/users");
      const data = await respons.json();
      console.log(data);

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setError(null);
        setLoading(false);

      }
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users, filteredUsers);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading Data! please wait</h1>
      ) : (
        <input
          value={searchParam}
          name="serarch-user"
          placeholder="Search user here..."
          onChange={handleChange}
        />
      )}

      {showDropdown && <Suggesstions  handleClick={handleClick} data={filteredUsers} />}
    </div>
  );
};

export default SearchAutocomplete;
