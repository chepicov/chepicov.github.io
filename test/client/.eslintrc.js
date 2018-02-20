module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "mocha": true,
    "es6": true,
    "node": true,
  },
  "rules": {
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }],
    "no-console": 2,
    "no-underscore-dangle": 0,
    "arrow-body-style": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "react/forbid-prop-types": "off",
    "no-unused-vars": ["error", { "args": "none" }],
    "react/prefer-stateless-function": 0
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          "src",
          "node_modules"
        ]
      }
    }
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  "globals": {
    "window": true,
  },
};
