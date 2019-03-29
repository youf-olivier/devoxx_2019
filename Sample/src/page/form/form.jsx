import React from "react";
import User from "./user";
import "./form.scss";

const Form = ({ onChange, inputs, onClick, hasSubmitOnce, users }) => (
  <>
    <form className="form">
      <div className="form__line">
        <span className="form__label">{inputs.githubAccount.label}</span>
        <div className="form__input-container">
          <input
            onChange={onChange}
            value={inputs.githubAccount.value}
            name={inputs.githubAccount.id}
            id={inputs.githubAccount.id}
          />
          {hasSubmitOnce && (
            <span className="form__error-message">
              {inputs.githubAccount.message}
            </span>
          )}
        </div>
      </div>

      <div className="form__line form__line--alone">
        <button className="btn btn--search" onClick={onClick} data-testid="button">
          Rechercher
        </button>
      </div>
    </form>
    {users && users.length > 0 && (
      <div className="user-list" data-testid="userlist">
        {users.map(user => (
          <User user={user} key={user.id} />
        ))}
      </div>
    )}
  </>
);

export default Form;
