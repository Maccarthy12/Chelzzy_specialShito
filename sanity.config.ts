import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schemaTypes';
import { apiVersion, dataset, projectId } from './src/sanity/env';

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'ChelzzyLive TV Studio',

  projectId: projectId || 'placeholder-project-id',
  dataset: dataset || 'production',

  plugins: [structureTool()],

  schema: {
    types: schema.types,
  },
});
