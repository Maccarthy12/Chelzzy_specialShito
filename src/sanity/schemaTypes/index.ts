import { type SchemaTypeDefinition } from 'sanity';
import { broadcast } from './broadcast';
import { category } from './category';
import { siteSettings } from './siteSettings';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [broadcast, category, siteSettings],
};
