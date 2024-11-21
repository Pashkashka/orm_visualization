module.exports = {
  // ... другие настройки ...
  env: {
    browser: true,
    es2021: true,
    node: true, // Добавлено для NODE окружения
  },
  rules: {
    // ... другие правила ...
    "no-unused-vars": process.env.NODE_ENV === "production" ? "warn" : "warn",
    "react-hooks/exhaustive-deps":
      process.env.NODE_ENV === "production" ? "warn" : "warn",
    // и так далее для остальных правил, которые хотите ослабить в разработке
  },
};
