import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
/** Components */
import SocialMedia from '@components/SocialMedia';
/** Types */
import { IEntitiesData } from '@customTypes/entities';
/** Services */
import { getHomepageData } from '@services/homepage';

export type HomeProps = {
  socialMedias: IEntitiesData;
};

const Home = ({ socialMedias }: HomeProps): JSX.Element => (
  <div>
    <Head>
      <title>David Olmos</title>
    </Head>

    <main className="home">
      <div className="home__avatar">
        <img src="/avatar.jpg" alt="David Olmos" />
      </div>
      <div className="home__content">
        <div className="home__author">
          <h1 className="home__name">David Olmos</h1>
          <section>
            <p>
              Hey, I&apos;m David and I&apos;m a frontend developer. I&apos;ve
              built this small place just so I can post about things I find
              interesting and some other discoveries I make.
            </p>
            <p>
              My interests in software are JavaScript, TypeScript, React,
              Next.js & Vue, among others.
            </p>
          </section>
          <section>
            <Link href="/about">
              <a className="home__about">Learn more about me</a>
            </Link>
          </section>
          <section>
            <SocialMedia socialMedias={socialMedias.Items} />
          </section>
        </div>
      </div>
    </main>

    <style jsx>{`
      .home {
        width: 100%;
      }

      .home__avatar {
        width: 110px;
        height: 110px;
        border: 3px solid var(--avatar-border);
        border-radius: 50%;
        padding: 8px;
        transition: all 0.2s linear;
      }

      .home__avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-size: cover;
        overflow: hidden;
      }

      .home__content {
        display: flex;
        flex-direction: column;
        margin-top: 24px;
        transition: all 0.2s linear;
      }

      .home__author {
        display: flex;
        flex-direction: column;
      }

      .home__name {
        color: var(--text-primary);
        font-size: 36px;
        font-weight: 700;
        line-height: 40px;
        transition: all 0.2s linear;
      }

      .home__about {
        font-weight: 500;
        line-height: 1.2em;
      }

      .home__about::after {
        content: '→';
        margin-left: 8px;
        vertical-align: middle;
        transition: all 0.3s ease;
      }

      .home__about:hover::after {
        margin-left: 10px;
      }

      section:not(:first-of-type) {
        margin-top: 20px;
      }

      @media (min-width: 768px) {
        .home__avatar {
          width: 150px;
          height: 150px;
          border-width: 4px;
        }

        .home__content {
          margin-top: 48px;
        }
      }
    `}</style>
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await getHomepageData();
    return { props: { ...data } };
  } catch {
    return { notFound: true };
  }
};

export default Home;
