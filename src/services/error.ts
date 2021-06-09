// Custom imports
import { getEntityInstances } from '@services/entities';

// Metadata for the error page
const METADATA = {
  title: 'Page not found | David Olmos',
  description: 'This is not the page you are looking for.',
};

// Metadata for the internal error page
const INTERNAL_METADATA = {
  title: 'Internal Server Error | David Olmos',
  description: `Woops, it seems like we're having issues here. But don't worry, we will fix them`,
};

// Get the error data
export const getErrorData = async () => {
  const navItems = await getEntityInstances('nav-items');
  const legalBlocks = await getEntityInstances('legal-blocks');

  return { navItems, legalBlocks, meta: METADATA };
};

// Get the internal error data
export const getInternalErrorData = async () => {
  const navItems = await getEntityInstances('nav-items');
  const legalBlocks = await getEntityInstances('legal-blocks');

  return { navItems, legalBlocks, meta: INTERNAL_METADATA };
};
