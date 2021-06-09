/** Types */
import { IEntity } from '@customTypes/entities';
/** Styles */
import styles from './Footer.module.scss';

type FooterProps = {
  legalBlocks: IEntity[];
};

const Footer = ({ legalBlocks }: FooterProps): JSX.Element => (
  <div className={styles.footer}>
    {legalBlocks.map(({ id, name, link }) => (
      <div key={`${id}-footer-item`} className={styles.footerItem}>
        <a href={link} className={styles.footerLink}>
          {name}
        </a>
      </div>
    ))}
  </div>
);
export default Footer;
