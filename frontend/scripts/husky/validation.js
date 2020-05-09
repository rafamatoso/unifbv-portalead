const fileSystem = require("fs");

const configVars = require("./config");

const getMessageType = (configs, message) => {
  const filterResult = Object.keys(configs.rules).filter((keyString) =>
    message.startsWith(keyString)
  );

  return filterResult[0];
};

const validateFunction = (configs, fs) => {
  const defaultResult = {
    message: "Validação de mensagem de commit realizada com sucesso.",
    status: configs.SUCCESS_STATUS,
  };

  const fileExists = fs.existsSync(configs.FILE_PATH);

  if (!fileExists) {
    return {
      ...defaultResult,
      message: "Arquivo com a mensagem de commit não encontrado",
      status: configs.ERROR_STATUS,
    };
  }

  const fileContent = fs.readFileSync(configs.FILE_PATH, "utf8");

  if (!fileContent || !fileContent.trim()) {
    return {
      ...defaultResult,
      message: "Mensagem de commit não definida",
      status: configs.ERROR_STATUS,
    };
  }

  const commitMessage = fileContent.trim();

  if (commitMessage.length > configs.MAX_MESSAGE_SIZE) {
    return {
      ...defaultResult,
      message: `A mensagem de commit não pode ter mais de ${configs.MAX_MESSAGE_SIZE} caracteres`,
      status: configs.ERROR_STATUS,
      commitMessage,
    };
  }

  const commitType = getMessageType(configs, commitMessage);

  if (!commitType) {
    return {
      ...defaultResult,
      message: `A mensagem de commit deve iniciar com um dos seguintes prefixos: ${Object.keys(
        configs.rules
      ).join(" ")}`,
      status: configs.ERROR_STATUS,
      commitMessage,
    };
  }

  const ruleToBeExecuted = configs.rules[commitType];

  if (!ruleToBeExecuted.regex.test(commitMessage)) {
    return {
      ...defaultResult,
      message: "Mensagem fora do padrão para o tipo do commit identificado.",
      status: configs.ERROR_STATUS,
      rule: ruleToBeExecuted.description,
      examples: [...ruleToBeExecuted.examples],
      commitMessage,
    };
  }

  return {
    ...defaultResult,
    rule: ruleToBeExecuted.description,
    examples: [...ruleToBeExecuted.examples],
    commitMessage,
    isSucess: true,
  };
};

module.exports = {
  validateFunction,
  validate: () => validateFunction(configVars, fileSystem),
};
