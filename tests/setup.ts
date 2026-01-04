/**
 * @fileoverview Arquivo de setup para testes Jest
 * 
 * @description
 * Configurações globais para todos os testes
 */

// Importar matchers do Jest
import '@jest/globals';

// Configurações globais
expect.extend({
  // Matchers customizados podem ser adicionados aqui
});

// Mock para módulos se necessário
jest.mock('fs', () => ({
  readFileSync: jest.fn(),
  writeFileSync: jest.fn(),
  existsSync: jest.fn(),
  mkdirSync: jest.fn(),
}));
