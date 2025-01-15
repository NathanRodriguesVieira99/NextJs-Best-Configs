import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    rules: {
      // Regras gerais
      "no-console": ["warn", { "allow": ["warn", "error"] }], // Evita uso de console.log
      "react/react-in-jsx-scope": "off", // Não é necessário importar o React no Next.js (a partir do Next 10)
      "react/jsx-uses-react": "off", // Não é necessário usar explicitamente `React` no JSX
      "react/prop-types": "off", // Next.js usa TypeScript para verificação de tipos, então desativa a verificação de prop-types
      "@typescript-eslint/explicit-module-boundary-types": "off", // Não exige tipos explícitos para funções em módulos
      "@typescript-eslint/no-explicit-any": "warn", // Alerta ao usar `any`
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }], // Evita variáveis não utilizadas com a exceção de argumentos começando com "_"
      "@typescript-eslint/ban-ts-comment": "warn", // Alerta quando usa ts-ignore/ts-expect-error
      "jsx-a11y/anchor-is-valid": "warn", // Garante que os links <a> sejam válidos
      "jsx-a11y/alt-text": "warn", // Garante que todas as imagens tenham texto alternativo
      // Regras do Jest
      "jest/valid-expect": "warn", // Garante que os testes usem o `expect` de forma válida
      "jest/expect-expect": "warn", // Garante que os testes esperem por algo
    },
    plugins: [
      "react",
      "@typescript-eslint",
      "jsx-a11y",
      "next",
      "jest", // Plugin Jest
    ],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:next/recommended",
      "plugin:jest/recommended", // Adiciona as configurações recomendadas do Jest
      "prettier"
    ],
  },
];
