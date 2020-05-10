const execute = (validationResult, log, { green, yellow, red }, exitFn) => {
  if (validationResult.isSucess) {
    log(green("Validação de mensagem de commit realizada com sucesso."));
    log(green("Tipo de commit identificado: "), yellow(validationResult.rule));
    log(
      green("Mensagem de commit validada: "),
      yellow(validationResult.commitMessage)
    );
    return exitFn(validationResult.status);
  }

  log(red("Validação de mensagem de commit realizada com erro."));
  log(red(validationResult.message));

  if (validationResult.rule) {
    log(red("Tipo de commit identificado: "), yellow(validationResult.rule));
  }

  if (validationResult.commitMessage) {
    log(red("Mensagem de commit: "), yellow(validationResult.commitMessage));
  }

  if (validationResult.examples) {
    log(yellow("Exemplo(s) de mensagens para este tipo de commit:"));
    validationResult.examples.forEach((example) => {
      log(yellow(example));
    });
  }
  return exitFn(validationResult.status);
};

const startValidation = (validateFn, log, { cyan }) => {
  log(cyan("Iniciando validação de mensagem de commit..."));

  return validateFn();
};

const executeFn = (validateFn, logFunction, colors, exitFn) => {
  const validateReturned = startValidation(validateFn, logFunction, colors);

  return execute(validateReturned, logFunction, colors, exitFn);
};

module.exports = {
  executeFn,
};
