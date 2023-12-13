'use client';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Preloader from '@/components/commons/Preloader';

import s from './BookPage.module.scss';
import Button from '@/components/commons/Button';

export default function BookPage() {
  const router = useRouter();
  const { id } = router.query;

  const [loader, setLoader] = useState(true);

  const allBooks = useSelector((state) => state.books);
  const book = allBooks.find((item) => item.id === Number(id));

  useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, [loader]);

  return (
    <div className={s.root}>
      {loader ? <Preloader />
        : (
          <>
            <Button href="/" className={s.backToMainLink}>На главную</Button>
            <div className={s.bookBorder}>
              <div className={s.bookContentContainer}>
                <div className={s.authorContainer}>
                  <p>{book.author}</p>
                </div>
                <div className={s.titleContainer}>
                  <p>{book.title}</p>
                </div>
              </div>
              <div className={s.bookSpine} />
              <div className={s.bookPages} />
              <p className={s.bookYear}>{book.year}</p>
            </div>
          </>
        )}
    </div>
  );
}
