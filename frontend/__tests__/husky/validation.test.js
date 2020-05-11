import { validateFunction } from '../../scripts/husky/validation';

const getFSMock = (expectedExistsSync, expectedReadFileSync) => ({
  existsSync: () => expectedExistsSync,
  readFileSync: () => expectedReadFileSync,
});

const configMock = {
  rules: {
    testKey: {
      description: 'Test Description',
      examples: ['testKey: random example'],
      regex: /^testKey: (.){3,}$/,
    },
  },
  MAX_MESSAGE_SIZE: 25,
  FILE_PATH: './path',
  SUCCESS_STATUS: 1,
  ERROR_STATUS: 0,
};

describe('Husky', () => {
  describe('validation', () => {
    test('file not found', async () => {
      const fsMock = getFSMock(false);

      const returnedValue = validateFunction(configMock, fsMock);

      expect(returnedValue).not.toHaveProperty('isSucess');
      expect(returnedValue).toHaveProperty('message');
      expect(returnedValue.message).toEqual(
        'Arquivo com a mensagem de commit não encontrado',
      );
      expect(returnedValue).toHaveProperty('status');
      expect(returnedValue.status).toEqual(configMock.ERROR_STATUS);
    });

    test('commit message not defined', async () => {
      const fsMock = getFSMock(true, '');

      const returnedValue = validateFunction(configMock, fsMock);

      expect(returnedValue).not.toHaveProperty('isSucess');
      expect(returnedValue).toHaveProperty('message');
      expect(returnedValue.message).toEqual('Mensagem de commit não definida');
      expect(returnedValue).toHaveProperty('status');
      expect(returnedValue.status).toEqual(configMock.ERROR_STATUS);
    });

    test('max char size reached', async () => {
      const wrongCommitMessage = '1234567890 1234567890 1234567890';

      const fsMock = getFSMock(true, wrongCommitMessage);

      const returnedValue = validateFunction(configMock, fsMock);

      expect(returnedValue).not.toHaveProperty('isSucess');
      expect(returnedValue).toHaveProperty('message');
      expect(returnedValue.message).toEqual(
        `A mensagem de commit não pode ter mais de ${configMock.MAX_MESSAGE_SIZE} caracteres`,
      );
      expect(returnedValue).toHaveProperty('status');
      expect(returnedValue.status).toEqual(configMock.ERROR_STATUS);
      expect(returnedValue).toHaveProperty('commitMessage');
      expect(returnedValue.commitMessage).toEqual(wrongCommitMessage);
    });

    test('wrong start key', async () => {
      const wrongPatternMessage = 'something: else';
      const fsMock = getFSMock(true, wrongPatternMessage);

      const returnedValue = validateFunction(configMock, fsMock);

      expect(returnedValue).not.toHaveProperty('isSucess');
      expect(returnedValue).toHaveProperty('message');
      expect(returnedValue.message).toEqual(
        'A mensagem de commit deve iniciar com um dos seguintes prefixos: testKey',
      );
      expect(returnedValue).toHaveProperty('status');
      expect(returnedValue.status).toEqual(configMock.ERROR_STATUS);
      expect(returnedValue).toHaveProperty('commitMessage');
      expect(returnedValue.commitMessage).toEqual(wrongPatternMessage);
    });

    test('wrong pattern', async () => {
      const wrongPatternMessage = 'testKey:';

      const fsMock = getFSMock(true, wrongPatternMessage);

      const returnedValue = validateFunction(configMock, fsMock);

      expect(returnedValue).not.toHaveProperty('isSucess');
      expect(returnedValue).toHaveProperty('message');
      expect(returnedValue.message).toEqual(
        'Mensagem fora do padrão para o tipo do commit identificado.',
      );
      expect(returnedValue).toHaveProperty('status');
      expect(returnedValue.status).toEqual(configMock.ERROR_STATUS);
      expect(returnedValue).toHaveProperty('commitMessage');
      expect(returnedValue.commitMessage).toEqual(wrongPatternMessage);
      expect(returnedValue).toHaveProperty('rule');
      expect(returnedValue.rule).toEqual(configMock.rules.testKey.description);
      expect(returnedValue).toHaveProperty('examples');
      expect(returnedValue.examples).toEqual([
        ...configMock.rules.testKey.examples,
      ]);
    });

    test('sucess', async () => {
      const message = 'testKey: this is ok';

      const fsMock = getFSMock(true, message);

      const returnedValue = validateFunction(configMock, fsMock);

      expect(returnedValue).toHaveProperty('message');
      expect(returnedValue).toHaveProperty('isSucess');
      expect(returnedValue.isSucess).toEqual(true);
      expect(returnedValue.message).toEqual(
        'Validação de mensagem de commit realizada com sucesso.',
      );
      expect(returnedValue).toHaveProperty('status');
      expect(returnedValue.status).toEqual(configMock.SUCCESS_STATUS);
      expect(returnedValue).toHaveProperty('commitMessage');
      expect(returnedValue.commitMessage).toEqual(message);
      expect(returnedValue).toHaveProperty('rule');
      expect(returnedValue.rule).toEqual(configMock.rules.testKey.description);
      expect(returnedValue).toHaveProperty('examples');
      expect(returnedValue.examples).toEqual([
        ...configMock.rules.testKey.examples,
      ]);
    });
  });
});
