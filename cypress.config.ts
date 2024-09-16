// eslint-disable-next-line @typescript-eslint/no-require-imports
require('tsconfig-paths/register');
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://github.com',
    defaultCommandTimeout: 10000,  // Increased default timeout
    setupNodeEvents(on, config) {
      // Node event listeners go here if needed
    },
    specPattern: 'cypress/integration/**/*.spec.ts',
    supportFile: false,
  },
});
