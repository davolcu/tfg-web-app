/** Components */
import ActiveLink from '@components/ActiveLink';
/** Types */
import { IEntity } from '@customTypes/entities';
/** Utils */
import { getStyleObjectFromString } from '@utils/utils';
/** Styles */
import styles from './Header.module.scss';

type HeaderProps = {
  navItems: IEntity[];
};

const Header = ({ navItems }: HeaderProps): JSX.Element => (
  <div className={styles.header}>
    <div className={styles.headerMenu}>
      <div className={styles.headerMenuItem}>
        <ActiveLink
          to="/"
          className={styles.headerMenuItemLink}
          activeClassName={styles.headerMenuItemLinkActive}
        >
          Home
        </ActiveLink>
      </div>

      {navItems.map(({ id, name, link, style }) => {
        const formattedStyle = style ? getStyleObjectFromString(style) : {};

        return (
          <div key={`${id}-navigation-item`} className={styles.headerMenuItem}>
            <ActiveLink
              to={link}
              className={styles.headerMenuItemLink}
              activeClassName={styles.headerMenuItemLinkActive}
              style={formattedStyle}
            >
              {name}
            </ActiveLink>
          </div>
        );
      })}
    </div>
  </div>
);

export default Header;
