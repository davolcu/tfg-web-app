import Head from 'next/head';
/** Types */
import { MetaProps } from '@customTypes/metadata';

const Meta = ({
  title,
  description,
  cardImage = '/avatar.jpg',
}: MetaProps): JSX.Element => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="follow, index" />
    <meta name="description" content={description} />
    <meta name="author" content="David Olmos" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:image" content={cardImage} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@vercel" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={cardImage} />
    <link rel="shortcut icon" href="/favicon.ico?v=3" />
  </Head>
);

export default Meta;
