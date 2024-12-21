import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '6qa7prz6',
  dataset: 'production',
  apiVersion: "2024-01-01",
  useCdn: false,
  // token: process.env.SANITY_SECRET_TOKEN // Needed for certain operations like updating content or accessing previewDrafts perspective
})
