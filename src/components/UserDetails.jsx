import React from "react";

const UserDetails = ({ userData, repos }) => {
  return (
    <div className="userDetails">
      <h2>User Details:</h2>
      <img src={userData.avatar_url} alt="User Avatar" />
      <p>Username: {userData.name}</p>
      <p>Location: {userData.location}</p>
      <p>Bio: {userData.bio}</p>
      <h3>Repositories:</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
