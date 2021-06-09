import { useContext } from 'react';
/** Context */
import { ThemeContext } from '@context/themeContext';
/** Constants */
import Constants from '@constants/common';
/** Types */
import { ColorMode } from '@customTypes/theme';
/** Styles */
import styles from './ThemeToggler.module.scss';

const ThemeToggler = (): JSX.Element => {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  const handleChange = ({ target: { checked } }) => {
    const checkedColorMode = (checked
      ? Constants.DARK
      : Constants.LIGHT) as ColorMode;

    setColorMode(checkedColorMode);
  };

  if (!colorMode) {
    return null;
  }

  return (
    <label className={styles.toggler} htmlFor="theme_toggler">
      <input
        id="theme_toggler"
        name="theme_toggler"
        type="checkbox"
        className={styles.togglerOriginal}
        checked={colorMode === Constants.DARK}
        onChange={handleChange}
      />
      <div className={styles.togglerFake} />
      <div className={styles.togglerBackground} />
    </label>
  );
};

export default ThemeToggler;
