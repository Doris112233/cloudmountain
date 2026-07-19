module.exports = {
  extends: [require.resolve("@umijs/max/eslint")],
  overrides: [
    {
      files: ["src/pages/**/locales/*.ts"],
      rules: { "no-useless-escape": "off" },
    },
  ],
};
