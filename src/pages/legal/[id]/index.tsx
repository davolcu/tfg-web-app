import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
/** Types */
import { IEntity } from '@customTypes/entities';
/** Services */
import { getLegalData } from '@services/legal';

export type HomeProps = {
  legalBlock: IEntity;
};

const Home = ({ legalBlock }: HomeProps): JSX.Element => (
  <div>
    <Head>
      <title>David Olmos</title>
    </Head>

    <main
      dangerouslySetInnerHTML={{
        __html: legalBlock?.content ?? `<h1> There's no content to show</h1>`,
      }}
    />
  </div>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  if (!query?.id) {
    return { notFound: true };
  }

  try {
    const data = await getLegalData(query.id);
    return { props: { ...data } };
  } catch {
    return { notFound: true };
  }
};

export default Home;
