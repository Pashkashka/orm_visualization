module.exports = {
  parser: "@babel/eslint-parser", // Укажите парсер для JSX
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Разрешить использование JSX
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [], // Добавьте если вы используете CRA
  plugins: ["react", "react-hooks"], // Добавьте плагины
  rules: {
    // ... ваши правила ...
    "no-unused-vars": "warn", // Или "error" - зависит от ваших настроек
    "react-hooks/exhaustive-deps": "warn", // Или "error"
    // ...
  },
};
