// Custom imports
import { getEntityInstances, getEntityInstance } from '@services/entities';

// Get the homepage data
export const getLegalData = async (id) => {
  const navItems = await getEntityInstances('nav-items');
  const socialMedias = await getEntityInstances('social-medias');
  const legalBlocks = await getEntityInstances('legal-blocks');
  const legalBlock = legalBlocks.Items.find(({ slug }) => slug === id);

  return { navItems, socialMedias, legalBlocks, legalBlock };
};
