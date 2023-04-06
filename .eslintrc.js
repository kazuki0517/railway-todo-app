module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/jsx-runtime", "prettier"],

	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {},
};
