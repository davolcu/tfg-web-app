/** Components */
import ThemeToggler from '@components/ThemeToggler';
/** Styles */
import styles from './SubHeader.module.scss';

const SubHeader = (): JSX.Element => (
  <div className={styles.subHeader}>
    <ThemeToggler />
  </div>
);

export default SubHeader;
