'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { object } from 'prop-types';

import Button from '@/components/commons/Button';

import s from './BookPage.module.scss';

export default function BookPage({ currentBook }) {
  const router = useRouter();

  const { id } = router.query;

  const [book, setBook] = useState();

  useEffect(() => {
    if (!id) {
      return;
    }

    setBook(currentBook);
  }, [id]);

  return (
    <div className={s.root}>
      { book && (
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

BookPage.propTypes = {
  currentBook: object,
};
