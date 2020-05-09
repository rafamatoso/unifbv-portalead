const FILE_PATH = "../.git/COMMIT_EDITMSG";
const MAX_MESSAGE_SIZE = 72;
const SUCCESS_STATUS = 0;
const ERROR_STATUS = 1;

const rules = {
  // New feature
  feature: {
    description: "Feature",
    examples: ["feature/Including business rule for Random Feature"],
    regex: /^feature\/(.){6,}$/,
  },
  // Chore
  chore: {
    description: "Melhorias e modificações pequenas",
    examples: ["chore/Improving performance for Random Feature"],
    regex: /^chore\/(.){6,}$/,
  },
  // bugfix
  bugfix: {
    description: "Correção de bug encontrado em desenvolvimento",
    examples: ["bugfix/Fixing wrong business rule"],
    regex: /^bugfix\/(.){6,}$/,
  },
  // Fix after deployed at prod
  hotfix: {
    description: "Correção de bug encontrado em produção",
    examples: [
      "hotfix/Fixing wrong business rule",
      "hotfix/Fixing wrong business behavior",
    ],
    regex: /^hotfix\/(.){6,}$/,
  },
  // Adding tests
  test: {
    description: "Testes",
    examples: ["test/Adding SomeComponent unit tests"],
    regex: /^test\/(.){6,}$/,
  },
};

module.exports = {
  rules,
  MAX_MESSAGE_SIZE,
  FILE_PATH,
  SUCCESS_STATUS,
  ERROR_STATUS,
};
