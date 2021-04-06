import { useState } from 'react';
import Head from 'next/head';

import Tiles from 'components/Tiles';
import VercelIcon from 'assets/vercel.svg';
import styles from 'styles/pages/Home.module.scss';

const Home = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <VercelIcon className={styles.icon} />
        <h1 className={styles.title}>
          {toggler && (
            <span>
              Welcome to <a href='https://nextjs.org'>Next.js!</a>
            </span>
          )}
          {!toggler && <span>This is CSC 59939!</span>}
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <button className={styles.button} onClick={() => setToggler(!toggler)}>
          Click Me To Toggle
        </button>
      </main>

      <Tiles slidesPerView={2} />

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
