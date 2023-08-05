// module.exports = {
//    testEnvironment: "jest-environment-jsdom",
//    moduleNameMapper: {
//       "^@/(.*)$": "<rootDir>/src/$1",
//    },
//    transform: {
//       "^.+\\.(js|jsx|ts|tsx)$": [
//          "ts-jest",
//          {
//             tsconfig: "tsconfig.json",
//             // Outras opções do ts-jest podem ser definidas aqui
//          },
//       ],
//    },
//    testMatch: ["<rootDir>/src/**/*.spec.(ts|tsx)"],
//    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
// };

const nextJest = require("next/jest");
const createJestConfig = nextJest({
   dir: "./",
});
const customJestConfig = {
   moduleDirectories: ["node_modules", "<rootDir>/"],
   testEnvironment: "jest-environment-jsdom",
};
module.exports = createJestConfig(customJestConfig);
