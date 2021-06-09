// Custom imports
import { getEntityInstances } from '@services/entities';

// Get the homepage data
export const getHomepageData = async () => {
  const navItems = await getEntityInstances('nav-items');
  const socialMedias = await getEntityInstances('social-medias');
  const legalBlocks = await getEntityInstances('legal-blocks');

  return { navItems, socialMedias, legalBlocks };
};
