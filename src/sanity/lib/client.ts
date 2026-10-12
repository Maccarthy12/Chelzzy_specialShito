import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, isSanityConfigured } from '../env';

export const client = createClient({
  projectId: isSanityConfigured ? projectId : 'dummy-project-id',
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
