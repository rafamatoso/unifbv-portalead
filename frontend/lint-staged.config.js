module.exports = {
  'src/**/*.{js,jsx,ts,tsx,md,html}': [
    'eslint --fix',
    'prettier --write .',
    // 'jest --findRelatedTests',
    // 'git add .',
  ],
};
