// Custom imports
import { getEntityInstances } from '@services/entities';

// Metadata for the about page
const METADATA = {
  title: 'Page not found | David Olmos',
  description: 'This is not the page you are looking for.',
};

// Get the error data
export const getErrorData = async () => {
  const navItems = await getEntityInstances('nav-items');
  const legalBlocks = await getEntityInstances('legal-blocks');

  return { navItems, legalBlocks, meta: METADATA };
};
