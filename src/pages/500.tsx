import Head from 'next/head';
/** Types */
import { GetStaticProps } from 'next';
/** Services */
import { getInternalErrorData } from '@services/error';

const ErrorPage = (): JSX.Element => (
  <>
    <Head>
      <title>500 | Internal Server Error</title>
    </Head>

    <main className="error">
      <img src="/404.webp" alt="Error background" className="error__image" />
      <div className="error__wrapper">
        <span className="error__status">500</span>
        <p className="error__text">
          Woops, it seems like we&apos;re having issues here. But don&apos;t
          worry, we will fix them
        </p>
      </div>
    </main>

    <style jsx>{`
      .error {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #101827;
      }

      .error__image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.6;
      }

      .error__wrapper {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .error__status {
        color: #fbfbfc;
        font-size: 92px;
        font-weight: bold;
      }

      .error__text {
        min-width: 300px;
        max-width: 900px;
        color: #fbfbfc;
        font-size: 28px;
        margin: 0;
        text-align: center;
      }

      @media (min-width: 768px) {
        .error__status {
          font-size: 116px;
        }

        .error__text {
          font-size: 36px;
        }
      }

      @media (min-width: 1024px) {
        .error__status {
          font-size: 148px;
        }

        .error__text {
          font-size: 48px;
        }
      }
    `}</style>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const data = await getInternalErrorData();

  return {
    props: { ...data },
  };
};

export default ErrorPage;
