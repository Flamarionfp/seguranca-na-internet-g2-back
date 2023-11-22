import { defineConfig } from 'tsup';

export default defineConfig({
  loader: {
    '.toml': 'file',
    '.prisma': 'file',
    '.sql': 'file',
  },
});
