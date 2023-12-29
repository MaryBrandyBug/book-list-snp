'use client';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import selectBooks from '@/constants/variables';

import Button from '@/components/commons/Button';

import s from './BookPage.module.scss';
import { useEffect } from 'react';

export default function BookPage() {
  const router = useRouter();

  const { id } = router.query;

  const allBooks = useSelector(selectBooks);
  const book = id && allBooks.find((item) => item.id === Number(id));

  useEffect(() => {
    if (!book && id) router.push('/404');
  }, [book, id]);

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
