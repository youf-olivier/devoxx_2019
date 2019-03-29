import Validate from "mw.validation";

const validate = (value, rules) => {
  const validationResult = Validate.validation.firstError(
    Validate.validation.validateView(value, rules)
  );

  const errorMessage =
    validationResult != null ? validationResult.message : null;
  return errorMessage;
};

const validateFirstName = value => {
  const ruleMaxLength = {
    maxLength: { maxLength: 30, message: "Veuillez saisir un prénom valide" }
  };
  const rulePattern = {
    pattern: {
      regex: /^[0-9A-zÀ-ÿ-_'\s]+$/,
      message: "Veuillez saisir un prénom valide"
    }
  };

  const rules = [ruleMaxLength, rulePattern];
  return validate(value, rules);
};

const validateLastName = value => {
  const ruleMaxLength = {
    maxLength: { maxLength: 30, message: "Veuillez saisir un nom valide" }
  };
  const rulePattern = {
    pattern: {
      regex: /^[0-9A-zÀ-ÿ-_'\s]+$/,
      message: "Veuillez saisir un nom valide"
    }
  };

  const rules = [ruleMaxLength, rulePattern];
  return validate(value, rules);
};

const validateGithubAccount = value => {
  const ruleMaxLength = {
    maxLength: {
      maxLength: 30,
      message: "Veuillez saisir un compte Github Valide"
    }
  };
  const rulePattern = {
    pattern: {
      regex: /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/,
      message: "Veuillez saisir un nom de compte valide"
    }
  };
  const rulesRequired = { required: { message: "Compte Obligatoire" } };

  const rules = [rulesRequired, ruleMaxLength, rulePattern];
  return validate(value, rules);
};

export default {
  firstname: validateFirstName,
  lastname: validateLastName,
  githubAccount: validateGithubAccount
};
