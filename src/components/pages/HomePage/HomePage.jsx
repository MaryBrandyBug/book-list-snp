import Image from 'next/image';

import Library from '@/components/commons/Library';
import AddBookGroup from '@/components/commons/AddBookGroup';

import s from './HomePage.module.scss';

export default function HomePage() {
  return (
    <main className={s.root}>
      <div className={s.header}>
        <div className={s.pic}>
          <Image src="/star.svg" alt="little star" width={50} height={50} />
        </div>
        <h1>My books</h1>
      </div>
      <AddBookGroup />
      <Library />
    </main>
  );
}
