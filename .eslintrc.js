module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/multi-word-component-names':'off',
		'key-spacing':'off',
		'object-curly-spacing':'off',
		'no-tabs':'off',
		'no-mixed-spaces-and-tabs':'off',
		'spaced-comment':'off',
		'indent':'off',
		'no-trailing-spaces':'off',
		'import/no-duplicates':'off',
		'comma-spacing':'off',
		'no-multiple-empty-lines':'off',
		'space-before-function-paren':'off',
		'space-before-blocks':'off',
		'keyword-spacing':'off',
		'semi':'off',
		'arrow-spacing':'off',
		'block-spacing':'off',
		'space-infix-ops':'off',
		'comma-dangle':'off',
		'padded-blocks':'off',
		'eol-last':'off',	
		'object-curly-newline':'off',	
  }
}
