// .eslintrc.js - To handle CI build warnings
module.exports = {
  "extends": [
    "react-app",
    "react-app/jest"
  ],
  "rules": {
    // Temporarily disable some rules for production build
    "no-unused-vars": "warn",
    "react-hooks/exhaustive-deps": "warn"
  }
};
