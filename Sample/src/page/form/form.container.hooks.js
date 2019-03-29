import React, { useCallback, useState, useEffect, useContext } from "react";
import { MessageContext } from "commons/messages";
import FormComponent from "./form";
import validator from "./form.validation";
import { fetchUser } from "./form.backend";

const initialState = {
  githubAccount: {
    value: "",
    message: validator.githubAccount(""),
    id: "githubAccount",
    name: "githubAccount"
  }
};

const computeErrors = state =>
  Object.keys(state).reduce((acc, key) => {
    const input = state[key];
    if (input.message && input.message !== "") {
      return [...acc, { label: input.label, id: input.id }];
    }
    return acc;
  }, []);

const FormContainer = () => {
  const [inputs, setInputs] = useState(initialState);
  const [hasSubmitOnce, setHasSubmitOnce] = useState(false);
  const [errors, setErrors] = useState("");
  const [querry, setQuerry] = useState("");
  const [users, setUsers] = useState([]);
  const { displayMessage } = useContext(MessageContext);
  useEffect(() => {
    setErrors(computeErrors(inputs));
  }, [inputs]);

  useEffect(() => {
    fetchUser(querry).then(users => setUsers(users.items));
  }, [querry]);

  const onChange = useCallback(
    e => {
      const name = e.target.name;
      const value = e.target.value;
      const message = validator[name](value);
      setInputs({
        ...inputs,
        [name]: {
          value,
          message
        }
      });
    },
    [inputs]
  );
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      setHasSubmitOnce(true);
      if (errors.length > 0) {
        displayMessage("Le formulaire contient des erreurs");
      } else {
        displayMessage("");
        setQuerry(inputs.githubAccount.value);
      }
    },
    [inputs.githubAccount.value, errors]
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
