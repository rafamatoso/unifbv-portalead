import {executeFn} from '../../scripts/husky/execute';

const colorMock = (color) => (logInfo) => ({color, logInfo});

const colors = {
  cyan: colorMock('cyan'),
  green: colorMock('green'),
  yellow: colorMock('yellow'),
  red: colorMock('red'),
};

const logMock = (stack) => (...infos) => {
  infos.forEach((info) => stack.push(info));
};

const exitMock = (stack) => (exitCode) => stack.push(exitCode);

describe('Husky index', () => {
  test('sucess', async () => {
    const logStack = [];

    const logObject = logMock(logStack);

    const exitMockStack = [];

    const extiMockFn = exitMock(exitMockStack);

    const validateFn = () => ({
      isSucess: true,
      rule: 'Rule 1',
      commitMessage: 'Sucess Commit Message',
      status: 0,
    });

    executeFn(validateFn, logObject, colors, extiMockFn);

    expect(logStack).toHaveLength(6);
    expect(logStack[0]).toStrictEqual({
      color: 'cyan',
      logInfo: 'Iniciando validação de mensagem de commit...',
    });
    expect(logStack[1]).toStrictEqual({
      color: 'green',
      logInfo: 'Validação de mensagem de commit realizada com sucesso.',
    });
    expect(logStack[2]).toStrictEqual({
      color: 'green',
      logInfo: 'Tipo de commit identificado: ',
    });
    expect(logStack[3]).toStrictEqual({color: 'yellow', logInfo: 'Rule 1'});
    expect(logStack[4]).toStrictEqual({
      color: 'green',
      logInfo: 'Mensagem de commit validada: ',
    });
    expect(logStack[5]).toStrictEqual({
      color: 'yellow',
      logInfo: 'Sucess Commit Message',
    });
    expect(exitMockStack).toHaveLength(1);
    expect(exitMockStack[0]).toStrictEqual(0);
  });
  describe('error', () => {
    test('all fields', async () => {
      const logStack = [];

      const logObject = logMock(logStack);

      const exitMockStack = [];

      const extiMockFn = exitMock(exitMockStack);

      const validateFn = () => ({
        message: 'Random Message',
        rule: 'Rule 1',
        isSucess: false,
        commitMessage: 'Error Commit Message',
        status: 1,
        examples: ['Example 1', 'Example 2'],
      });

      executeFn(validateFn, logObject, colors, extiMockFn);

      expect(logStack).toHaveLength(10);
      expect(logStack[0]).toStrictEqual({
        color: 'cyan',
        logInfo: 'Iniciando validação de mensagem de commit...',
      });
      expect(logStack[1]).toStrictEqual({
        color: 'red',
        logInfo: 'Validação de mensagem de commit realizada com erro.',
      });
      expect(logStack[2]).toStrictEqual({
        color: 'red',
        logInfo: 'Random Message',
      });
      expect(logStack[3]).toStrictEqual({
        color: 'red',
        logInfo: 'Tipo de commit identificado: ',
      });
      expect(logStack[4]).toStrictEqual({color: 'yellow', logInfo: 'Rule 1'});
      expect(logStack[5]).toStrictEqual({
        color: 'red',
        logInfo: 'Mensagem de commit: ',
      });
      expect(logStack[6]).toStrictEqual({
        color: 'yellow',
        logInfo: 'Error Commit Message',
      });
      expect(logStack[7]).toStrictEqual({
        color: 'yellow',
        logInfo: 'Exemplo(s) de mensagens para este tipo de commit:',
      });
      expect(logStack[8]).toStrictEqual({
        color: 'yellow',
        logInfo: 'Example 1',
      });
      expect(logStack[9]).toStrictEqual({
        color: 'yellow',
        logInfo: 'Example 2',
      });
      expect(exitMockStack).toHaveLength(1);
      expect(exitMockStack[0]).toStrictEqual(1);
    });

    test('no rule', async () => {
      const logStack = [];

      const logObject = logMock(logStack);

      const exitMockStack = [];

      const extiMockFn = exitMock(exitMockStack);

      const validateFn = () => ({
        message: 'Random Message',
        isSucess: false,
        commitMessage: 'Error Commit Message',
        status: 1,
        examples: ['Example 1', 'Example 2'],
      });

      executeFn(validateFn, logObject, colors, extiMockFn);

      expect(logStack).toHaveLength(8);
      expect(logStack[0]).toStrictEqual({
        color: 'cyan',
        logInfo: 'Iniciando validação de mensagem de commit...',
      });
      expect(logStack[1]).toStrictEqual({
        color: 'red',
        logInfo: 'Validação de mensagem de commit realizada com erro.',
      });
      expect(logStack[2]).toStrictEqual({
        color: 'red',
        logInfo: 'Random Message',
      });
      expect(logStack[3]).toStrictEqual({
        color: 'red',
        logInfo: 'Mensagem de commit: ',
      });
      expect(logStack[4]).toStrictEqual({
        color: 'yellow',
        logInfo: 'Error Commit Message',
      });
      expect(logStack[5]).toStrictEqual({
        color: 'yellow',
        logInfo: 'Exemplo(s) de mensagens para este tipo de commit:',
      });
      expect(logStack[6]).toStrictEqual({
        color: 'yellow',
        logInfo: 'Example 1',
      });
      expect(logStack[7]).toStrictEqual({
        color: 'yellow',
        logInfo: 'Example 2',
      });
      expect(exitMockStack).toHaveLength(1);
      expect(exitMockStack[0]).toStrictEqual(1);
    });

    test('no commit message', async () => {
      const logStack = [];

      const logObject = logMock(logStack);

      const exitMockStack = [];

      const extiMockFn = exitMock(exitMockStack);

      const validateFn = () => ({
        message: 'Random Message',
        rule: 'Rule 1',
        isSucess: false,
        status: 1,
        examples: ['Example 1', 'Example 2'],
      });

      executeFn(validateFn, logObject, colors, extiMockFn);

      expect(logStack).toHaveLength(8);
      expect(logStack[0]).toStrictEqual({
        color: 'cyan',
        logInfo: 'Iniciando validação de mensagem de commit...',
      });
      expect(logStack[1]).toStrictEqual({
        color: 'red',
        logInfo: 'Validação de mensagem de commit realizada com erro.',
      });
      expect(logStack[2]).toStrictEqual({
        color: 'red',
        logInfo: 'Random Message',
      });
      expect(logStack[3]).toStrictEqual({
        color: 'red',
        logInfo: 'Tipo de commit identificado: ',
      });
      expect(logStack[4]).toStrictEqual({color: 'yellow', logInfo: 'Rule 1'});
      expect(logStack[5]).toStrictEqual({
        color: 'yellow',
        logInfo: 'Exemplo(s) de mensagens para este tipo de commit:',
      });
      expect(logStack[6]).toStrictEqual({
        color: 'yellow',
        logInfo: 'Example 1',
      });
      expect(logStack[7]).toStrictEqual({
        color: 'yellow',
        logInfo: 'Example 2',
      });
      expect(exitMockStack).toHaveLength(1);
      expect(exitMockStack[0]).toStrictEqual(1);
    });
    test('no examples', async () => {
      const logStack = [];

      const logObject = logMock(logStack);

      const exitMockStack = [];

      const extiMockFn = exitMock(exitMockStack);

      const validateFn = () => ({
        message: 'Random Message',
        rule: 'Rule 1',
        isSucess: false,
        commitMessage: 'Error Commit Message',
        status: 1,
      });

      executeFn(validateFn, logObject, colors, extiMockFn);

      expect(logStack).toHaveLength(7);
      expect(logStack[0]).toStrictEqual({
        color: 'cyan',
        logInfo: 'Iniciando validação de mensagem de commit...',
      });
      expect(logStack[1]).toStrictEqual({
        color: 'red',
        logInfo: 'Validação de mensagem de commit realizada com erro.',
      });
      expect(logStack[2]).toStrictEqual({
        color: 'red',
        logInfo: 'Random Message',
      });
      expect(logStack[3]).toStrictEqual({
        color: 'red',
        logInfo: 'Tipo de commit identificado: ',
      });
      expect(logStack[4]).toStrictEqual({color: 'yellow', logInfo: 'Rule 1'});
      expect(logStack[5]).toStrictEqual({
        color: 'red',
        logInfo: 'Mensagem de commit: ',
      });
      expect(logStack[6]).toStrictEqual({
        color: 'yellow',
        logInfo: 'Error Commit Message',
      });
      expect(exitMockStack).toHaveLength(1);
      expect(exitMockStack[0]).toStrictEqual(1);
    });
  });
});
