// Custom imports
import { getEntityInstances } from '@services/entities';

// Metadata for the about page
const METADATA = {
  title: 'David Olmos',
  description:
    // eslint-disable-next-line max-len
    "Hey, I'm David and I'm a frontend developer. I've built this small place just so I can post about things I find interesting and some other discoveries I make.",
};

// Get the about data
export const getAboutData = async () => {
  const navItems = await getEntityInstances('nav-items');
  const legalBlocks = await getEntityInstances('legal-blocks');

  return { navItems, legalBlocks, meta: METADATA };
};
