import Image from 'next/image';

import s from './Preloader.module.scss';

export default function Preloader() {
  return (
    <div className={s.root}>
      <div className={s.containerBook}>
        <Image src="/book.svg" alt="book" width={130} height={50} className={s.book} />
      </div>
      <div className={s.containerMagnifier}>
        <Image src="/magnifier.svg" alt="magnifier" width={100} height={50} className={s.magnifier} />
      </div>
    </div>
  );
}
