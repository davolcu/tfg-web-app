import Head from 'next/head';
/** Types */
import { GetServerSideProps } from 'next';
/** Services */
import { getErrorData } from '@services/error';
/** Styles */
import styles from '@styles/Error.module.scss';

const ErrorPage = (): JSX.Element => (
  <>
    <Head>
      <title>404 | Page not found</title>
    </Head>

    <main className={styles.error}>
      <img
        src="/404.webp"
        alt="Error background"
        className={styles.error__image}
      />
      <div className={styles.error__wrapper}>
        <span className={styles.error__status}>404</span>
        <p className={styles.error__text}>
          This is not the page you are looking for.
        </p>
      </div>
    </main>
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await getErrorData();
    return { props: { ...data, error: true } };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default ErrorPage;
