// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
      	parser: 'babel-eslint'
    },
    env: {
      	browser: true,
    },
    extends: [
		// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
		// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
		'plugin:vue/essential', 
		// https://github.com/standard/standard/blob/master/docs/RULES-en.md
		'standard'
    ],
    // required to lint *.vue files
    plugins: [
      	'vue'
    ],
    // add your custom rules here
    rules: {
		// allow async-await
		'generator-star-spacing': 'off',
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// 分号
		'semi': ['error', 'always'],
		// 缩进
		'indent': 'off',
		/**
		 * 函数后加空格
		 * anonymous用于匿名函数表达式（例如function () {}）
		 * named用于命名函数表达式（例如function foo () {}）
		 * asyncArrow用于异步箭头函数表达式（例如async () => {}）
		 * */
		'space-before-function-paren': 'off',
		'no-tabs': 'off',
		
		'no-trailing-spaces': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'no-unused-vars': 'off'
    }
}
