module.exports = {
    "extends": ["airbnb", "prettier/react"],
    "plugins": ["prettier"],
    "env": {
      "browser": true,
      "es6": true,
      "jest": true,
      "mocha": true,
      "webextensions": true,
    },
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "import/no-extraneous-dependencies": [2, { devDependencies: true }],
      "import/no-named-as-default": 0,
      "arrow-parens": ["error", "as-needed"],
      "function-paren-newline": "off",
      "prettier/prettier":[ "error", {
        "singleQuote": true,
        "trailingComma": "all",
        "bracketSpacing": true,
        "jsxBracketSameLine": true,
        "parser": "flow",
      }]
    },
  };