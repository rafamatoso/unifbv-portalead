module.exports = {
  'src/*.{js,jsx,ts,tsx,md,html,css}': [
    'prettier --write',
    'eslint --fix',
    // 'jest --findRelatedTests',
    // 'git add .',
  ],
};
