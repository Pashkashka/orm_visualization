module.exports = {
  // ... другие настройки ...
  env: {
    browser: true,
    es2021: true,
    node: true, // Добавлено для NODE окружения
  },
  parserOptions: {
    ecmaVersion: "latest", // Или конкретная версия ECMAScript, например, 2020
    sourceType: "module", // Укажите, что файлы являются модулями
  },
  rules: {
    // ... другие правила ...
    "no-unused-vars": process.env.NODE_ENV === "production" ? "warn" : "warn",
    "react-hooks/exhaustive-deps":
      process.env.NODE_ENV === "production" ? "warn" : "warn",
    // и так далее для остальных правил, которые хотите ослабить в разработке
  },
};
