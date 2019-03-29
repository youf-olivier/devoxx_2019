import {
  computeErrors,
  onChangeHandler,
  onClickHandler
} from "./form.container";

describe("form container first tests suite ", () => {
  const state = {
    firstname: {
      label: "prénom",
      id: "firstname",
      message: ""
    },
    lastname: {
      label: "nom",
      id: "lastname",
      message: "Ce champs est requis"
    },
    birthdate: {
      label: "Date de naissance",
      id: "birthdate",
      message: "La date doit etre antérieure à la date du jour"
    }
  };

  it("should compute errors return an errors array", () => {
    const result = computeErrors(state);
    expect(result).toEqual([
      { id: "lastname", label: "nom", message: "Ce champs est requis" },
      {
        id: "birthdate",
        label: "Date de naissance",
        message: "La date doit etre antérieure à la date du jour"
      }
    ]);
  });

  it("should onChange change inputs", () => {
    const event = {
      target: {
        name: "firstname",
        value: "Jean"
      }
    };
    const props = {
      setInputs: jest.fn(),
      inputs: state
    };
    const validator = { firstname: value => `validation of ${value}` };
    onChangeHandler(validator)(props)(event);
    expect(props.setInputs).toBeCalledWith({
      ...state,
      firstname: {
        id: "firstname",
        label: "prénom",
        message: "validation of Jean",
        value: "Jean"
      }
    });
  });
  describe("OnClick tests subsuite", () => {
    const result = { items: ["Github result"] };
    const displayMessage = jest.fn();
    const setUser = jest.fn();
    const fetchUser = jest.fn(() => Promise.resolve(result));
    const setSubmit = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();
    });
    it("should not submit form and display error message when form contains erros", async () => {
      const inputs = state;
      const onClickCall = onClickHandler(fetchUser)({
        inputs,
        setSubmit,
        displayMessage,
        setUser
      });
      const event = { preventDefault: jest.fn() };

      await onClickCall(event);

      expect(event.preventDefault).toBeCalled();
      expect(setSubmit).toBeCalledWith(true);
      expect(setUser).not.toBeCalled();
      expect(fetchUser).not.toBeCalled();
      expect(displayMessage).toBeCalledWith(
        "Le formulaire contient des erreurs",
        [
          { id: "lastname", label: "nom", message: "Ce champs est requis" },
          {
            id: "birthdate",
            label: "Date de naissance",
            message: "La date doit etre antérieure à la date du jour"
          }
        ]
      );
    });
    it("should submit form and search user when call search", async () => {
      const inputs = {
        githubAccount: {
          value: "gaearon",
          id: "githubAccount",
          message: ""
        }
      };
      const onClickCall = onClickHandler(fetchUser)({
        inputs,
        setSubmit,
        displayMessage,
        setUser
      });
      const event = { preventDefault: jest.fn() };

      await onClickCall(event);

      expect(event.preventDefault).toBeCalled();
      expect(displayMessage).toBeCalledWith("");
      expect(setSubmit).toBeCalledWith(true);
      expect(setUser).toBeCalledWith(result.items);
      expect(fetchUser).toBeCalledWith("gaearon");
    });
  });
});
