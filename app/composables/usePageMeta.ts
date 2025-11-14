
import { useHead, useRuntimeConfig } from '#imports';

/**
 * A composable to set common SEO and head metadata for a page.
 * @param options - The metadata options for the specific page.
 */

interface PageMetaOptions {
  title: string;
  description: string;
  keywords: string;
  path: string; // The canonical path segment, e.g., 'contact'
}
export const usePageMeta = (options: PageMetaOptions) => {
  const { title, description, keywords, path } = options;

  // Use runtime config for the base URL
  const config = useRuntimeConfig();
  // Ensure 'siteUrl' is defined in nuxt.config.ts
  const baseUrl = (config.public.siteUrl as string) || 'https://unlockedhomeproject.com';

  // Construct the full canonical URL
  const canonicalUrl = `${baseUrl}/${path.startsWith('/') ? path.substring(1) : path}`;

  useHead({
    title,
    meta: [
      {
        name: 'description',
        content: description,
      },
      {
        name: 'keywords',
        content: keywords,
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: canonicalUrl,
      },
    ],
  });
};