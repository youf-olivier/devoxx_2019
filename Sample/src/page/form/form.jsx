import React, { Suspense } from "react";
import "./form.scss";
const User = React.lazy(() => import("./user"));

const Form = ({ onChange, inputs, onClick, hasSubmitOnce, users }) => (
  <>
    <form className="form">
      <div className="form__line">
        <label className="form__label" htmlFor={inputs.githubAccount.id}>
          {inputs.githubAccount.label}
        </label>
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
        <button
          className="btn btn--search"
          onClick={onClick}
          data-testid="button"
        >
          Rechercher
        </button>
      </div>
    </form>
    {users && users.length > 0 && (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="user-list" data-testid="userlist">
          {users.map(user => (
            <User user={user} key={user.id} />
          ))}
        </div>
      </Suspense>
    )}
  </>
);

export default Form;
