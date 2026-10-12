import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || 'dummy-project-id',
  dataset: dataset || 'production',
});

export const urlForImage = (source: Image | string | undefined | null) => {
  if (!source) return null;
  return imageBuilder.image(source).auto('format').fit('max');
};
