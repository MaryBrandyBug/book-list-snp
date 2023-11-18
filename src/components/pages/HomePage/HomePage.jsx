import MainSection from '@/components/commons/Library';
import AddBookGroup from '@/components/commons/AddBookGroup';

import s from './HomePage.module.scss';

export default function HomePage() {
  return (
    <main className={s.root}>
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
