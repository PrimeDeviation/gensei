import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  console.log('Vite env:', env);
  return {
    // Add any Vite configuration options here
    // For example:
    // plugins: [],
    // build: {},
    // server: {},
  };
});