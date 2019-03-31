import {
  compose,
  withState,
  withHandlers,
  fromRenderProps,
  lifecycle
} from "recompose";
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
      return [
        ...acc,
        { label: input.label, id: input.id, message: input.message }
      ];
    }
    return acc;
  }, []);

export const onChangeHandler = validatorInternal => ({
  setInputs,
  inputs
}) => e => {
  const name = e.target.name;
  const value = e.target.value;
  const message = validatorInternal[name](value);
  setInputs({
    ...inputs,
    [name]: {
      ...inputs[name],
      value,
      message
    }
  });
};

export const onClickHandler = fetchUserInternal => ({
  inputs,
  setSubmit,
  displayMessage,
  setUser
}) => async e => {
  e.preventDefault();
  setSubmit(true);
  const errors = computeErrors(inputs);
  if (errors.length > 0) {
    displayMessage("Le formulaire contient des erreurs", errors);
  } else {
    displayMessage("");
    try {
      const users = await fetchUserInternal(inputs.githubAccount.value);
      setUser(users.items);
    } catch (errors) {
      console.log(errors);
      displayMessage(`Erreur lors du fetch : ${errors}`);
    }
  }
};

const withLifeCycles = fetchUserInternal =>
  lifecycle({
    componentDidMount() {
      fetchUserInternal().then(
        users => {
          this.props.setUser(users.items);
        },
        errors => {
          this.props.displayMessage(`Erreur lors du fetch : ${errors}`);
        }
      );
    }
  });

const enhance = compose(
  withState("inputs", "setInputs", initialState),
  withState("users", "setUser", []),
  withState("hasSubmitOnce", "setSubmit", false),
  fromRenderProps(MessageContext.Consumer, ({ displayMessage }) => ({
    displayMessage
  })),
  withHandlers({
    onChange: onChangeHandler(validator),
    onClick: onClickHandler(fetchUser)
  }),
  withLifeCycles(fetchUser)
);

const FormContainer = enhance(FormComponent);
export default FormContainer;
