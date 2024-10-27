import type { Config } from "jest";
import nextJest from "next/jest";

// Carrega as configurações do Next.js e variáveis de ambiente
const createJestConfig = nextJest({
  dir: "./", // Caminho para o diretório raiz do app Next.js
});

// Configuração customizada para Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom", // Ambiente de teste adequado para o DOM
  moduleDirectories: ["node_modules", "src"], // Inclui 'src' como diretório de módulos raiz
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Mapeia o alias `@/` para `src`
    '^auth$': '<rootDir>/auth', // Mapeia o alias `auth` para o diretório auth
  },
  // Se precisar configurar algo antes de cada teste, descomente a linha abaixo
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// Exporta a configuração para garantir que o Jest do Next.js carregue as configurações de forma assíncrona
export default createJestConfig(config);
