import Head from 'next/head';
/** Types */
import { GetServerSideProps } from 'next';
/** Services */
import { getAboutData } from '@services/about';

const About = (): JSX.Element => (
  <div>
    <Head>
      <title>David Olmos</title>
      <link rel="icon" href="/favicon.ico?v=1" />
    </Head>

    <main className="about">
      <div className="about__avatar">
        <img src="/avatar.jpg" alt="David Olmos avatar" />
      </div>
      <div className="about__content">
        <h1 className="about__name">David Olmos</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          elementum sollicitudin lacinia. Nam pulvinar mi in risus ullamcorper
          sollicitudin. Nullam condimentum tortor tempus, malesuada sem ut,
          luctus tellus.
        </p>
        <p>
          Nullam lacinia elit nec arcu lacinia, vel posuere orci elementum.
          Maecenas felis nulla, aliquam in leo at, placerat lacinia velit.
        </p>
      </div>
    </main>

    <style jsx>{`
      .about {
        width: 100%;
        max-width: 700px;
        margin: 0px auto 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .about__avatar {
        width: 125px;
        height: 125px;
        border: 3px solid var(--avatar-border);
        border-radius: 50%;
        padding: 8px;
        transition: all 0.2s linear;
      }

      .about__avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-size: cover;
        overflow: hidden;
      }

      .about__content {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 24px;
        transition: all 0.2s linear;
      }

      .about__name {
        color: var(--text-primary);
        font-size: 36px;
        font-weight: 700;
        line-height: 40px;
        text-align: center;
        margin-bottom: 30px;
        transition: all 0.2s linear;
      }

      p {
        color: var(--text-primary);
        transition: all 0.2s linear;
      }

      @media (min-width: 768px) {
        .about__avatar {
          width: 175px;
          height: 175px;
          border-width: 4px;
        }

        .about__content {
          margin-top: 48px;
        }
      }
    `}</style>
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await getAboutData();
    return { props: { ...data } };
  } catch {
    return { notFound: true };
  }
};

export default About;
