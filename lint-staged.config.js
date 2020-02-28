module.exports = {
  '*.js': ['eslint', 'jest --findRelatedTests'],
  '*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx)': [
    'prettier --write',
  ],
}
