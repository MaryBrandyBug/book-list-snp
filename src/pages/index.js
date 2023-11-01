import Head from 'next/head';

import MainSection from '@/components/commons/Library';
import AddBookGroup from '@/components/commons/AddBookGroup';

import s from './page.module.scss';

export default function Home() {
  return (
    <main className={s.root}>
      <Head>
        <title>My Library</title>
        <meta name="description" content="Your awesome books" />
      </Head>
      <div className={s.header}>
        <div className={s.pic}>
          <img src="/star.svg" alt="little star" />
        </div>
        <h1>My books</h1>
      </div>
      <AddBookGroup />
      <MainSection />
    </main>
  );
}
