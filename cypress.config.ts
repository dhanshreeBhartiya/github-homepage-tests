// eslint-disable-next-line @typescript-eslint/no-require-imports
require('tsconfig-paths/register');
import { defineConfig } from 'cypress';
import fs from 'fs';
const envConfig = JSON.parse(fs.readFileSync('./cypress/env.json', 'utf8'));

export default defineConfig({
  projectId: 'vy3u25',
  env: envConfig,
  e2e: {
    baseUrl: 'https://github.com',
    // defaultCommandTimeout: 10000,  // Increased default timeout
    // setupNodeEvents(on, config) {
    //   // Node event listeners go here if needed
    // },
    specPattern: 'cypress/integration/**/*.spec.ts',
    supportFile: 'cypress/support/e2e.ts',
  },
});
