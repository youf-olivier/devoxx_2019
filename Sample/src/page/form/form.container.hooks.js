import React, { useCallback, useState, useEffect, useContext } from "react";
import { MessageContext } from "commons/messages";
import FormComponent from "./form";
import validator from "./form.validation";
import { fetchUser } from "./form.backend";

const initialState = {
  githubAccount: {
    id: "githubAccount",
    label: "Compte Github",
    value: "",
    message: validator.githubAccount("")
  }
};

export const computeErrors = state =>
  Object.keys(state).reduce((acc, key) => {
    const input = state[key];
    if (input.message && input.message !== "") {
      return [...acc, { label: input.label, id: input.id }];
    }
    return acc;
  }, []);

export const onChangeCB = (inputs, setInputs) => e => {
  const { name, value } = e.target;
  const message = validator[name](value);
  setInputs({
    ...inputs,
    [name]: {
      value,
      message
    }
  });
};

export const onSubmitCB = (
  accountValue,
  errors,
  displayMessage,
  setHasSubmitOnce,
  setQuery
) => e => {
  e.preventDefault();
  setHasSubmitOnce(true);
  if (errors.length > 0) {
    displayMessage("Le formulaire contient des erreurs");
  } else {
    displayMessage("");
    setQuery(accountValue);
  }
};

const FormContainer = () => {
  const [inputs, setInputs] = useState(initialState);
  const [hasSubmitOnce, setHasSubmitOnce] = useState(false);
  const [errors, setErrors] = useState("");
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const { displayMessage } = useContext(MessageContext);
  useEffect(() => {
    setErrors(computeErrors(inputs));
  }, [inputs]);

  useEffect(() => {
    fetchUser(query).then(users => setUsers(users.items));
  }, [query]);

  const onChange = useCallback(onChangeCB(inputs, setInputs), [
    inputs,
    setInputs
  ]);
  const onSubmit = useCallback(
    onSubmitCB(
      inputs.githubAccount.value,
      errors,
      displayMessage,
      setHasSubmitOnce,
      setQuery
    ),
    [inputs.githubAccount.value, errors, displayMessage, setHasSubmitOnce]
  );

  return (
    <FormComponent
      onChange={onChange}
      inputs={inputs}
      onClick={onSubmit}
      hasSubmitOnce={hasSubmitOnce}
      users={users}
    />
  );
};

export default FormContainer;
