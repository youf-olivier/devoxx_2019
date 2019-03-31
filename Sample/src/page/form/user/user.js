import React from "react";
import "./user.scss";

const UserCard = ({ user }) => (
  <div className="user-card" data-testid="usercard">
    <a href={user.html_url} className="user-card__link">
      <img
        src={user.avatar_url}
        className="user-card__avatar"
        alt={`${user.login}`}
      />
      <span className="user-card__login">{user.login}</span>
    </a>
  </div>
);

export default UserCard;
