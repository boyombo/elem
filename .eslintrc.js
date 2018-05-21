module.exports = {
  parser: "babel-eslint",
  extends: "standard",
  plugins: ["react", "jsx-ally", "import"],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    semi: 0
  }
};
