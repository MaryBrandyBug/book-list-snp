import s from './page.module.scss';

import MainSection from '../../components/MainSection';

export default function Home() {
  return (
    <main className={s.root}>
      <div className={s.header}>
        <div className={s.pic}>
          <img src="/star.svg" alt="little star" />
        </div>
        <h1>My books</h1>
      </div>
      <MainSection />
    </main>
  );
}
