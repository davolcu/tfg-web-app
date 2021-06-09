import cx from 'classnames';
/** Components */
import Meta from '@components/Meta';
import Header from '@components/Header';
import SubHeader from '@components/SubHeader';
import Footer from '@components/Footer';
/** Types */
import { MetaProps } from '@customTypes/metadata';
import { IEntity } from '@customTypes/entities';
/** Styles */
import styles from './Layout.module.scss';

type LayoutProps = {
  meta: MetaProps;
  isErrorPage: boolean;
  navItems: IEntity[];
  legalBlocks: IEntity[];
  children: JSX.Element;
};

const Layout = ({
  meta,
  isErrorPage,
  navItems,
  legalBlocks,
  children,
}: LayoutProps): JSX.Element => {
  const classNames = cx(styles.content, {
    [styles.contentError]: isErrorPage,
  });

  return (
    <>
      <Meta {...meta} />
      <Header navItems={navItems} />
      {!isErrorPage && <SubHeader />}
      <div className={classNames}>{children}</div>
      <Footer legalBlocks={legalBlocks} />
    </>
  );
};

export default Layout;
