import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface SocialMediaParams {
  key: string;
  id?: string;
  icon?: IconProp;
  link?: string;
  style?: any;
}

export const socialIcons = [
  { id: 'github', icon: ['fab', 'github'] },
  { id: 'twitter', icon: ['fab', 'twitter'] },
  { id: 'mail', icon: ['far', 'envelope'] },
];
