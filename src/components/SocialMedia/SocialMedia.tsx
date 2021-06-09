import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/** Utils */
import { getStyleObjectFromString } from '@utils/utils';
/** Config */
import { socialIcons, SocialMediaParams } from './config';
/** Styles */
import styles from './SocialMedia.module.scss';

const SocialMedia = ({ socialMedias }): JSX.Element => {
  const mediaElements = socialMedias.reduce(
    (acc, { id, name, link, style }) => {
      const { icon } =
        socialIcons.find((socialIcon) => socialIcon.id === name) ?? {};
      const formattedStyle = style ? getStyleObjectFromString(style) : {};

      acc.push({
        key: id,
        id: name,
        link,
        style: formattedStyle,
        ...(!!icon && { icon }),
      });
      return acc;
    },
    []
  );

  return (
    <div className={styles.socialMedia}>
      {mediaElements.map(
        ({ key, id, link, icon, style }: SocialMediaParams) => (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            key={key}
            style={style}
            className={`${styles.socialMediaLink} ${
              styles[`${id}SocialMediaLink`]
            }`}
          >
            {!!icon && (
              <FontAwesomeIcon icon={icon} className={styles.socialMediaIcon} />
            )}
          </a>
        )
      )}
    </div>
  );
};

export default SocialMedia;
