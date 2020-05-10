module.exports = {
  '*.{js,jsx,ts,tsx,md,html,css}': [
    'eslint --fix',
    'prettier --write',
    // 'jest --findRelatedTests',
    // 'git add .',
  ],
};
