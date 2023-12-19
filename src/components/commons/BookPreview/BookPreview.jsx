'use client';

import { func, number, string } from 'prop-types';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

import Button from '../Button';

import s from './BookPreview.module.scss';

export default function BookPreview({
  title, author, year, onClick,
}) {
  const handleClickOutside = () => {
    onClick();
  };

  const useOutsideClick = (callback) => {
    const ref = useRef();

    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };
      document.addEventListener('click', handleClick, true);

      return () => {
        document.removeEventListener('click', handleClick, true);
      };
    }, [ref]);

    return ref;
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <div className={s.root} ref={ref}>
      <div className={s.header}>
        <h2>{title}</h2>
        <Button className={s.closeBtn} onClick={onClick}><Image src="/close.svg" alt="close button icon" width={100} height={100} /></Button>
      </div>
      <div className={s.container}>
        <div className={s.block}>
          <Image src="/author.svg" alt="author" width={50} height={100} />
          <p className={s.info}>{author}</p>
        </div>
        <div className={s.block}>
          <Image src="/calendar.svg" alt="calendar" width={50} height={100} />
          <p className={s.info}>{year}</p>
        </div>
      </div>
    </div>
  );
}

BookPreview.propTypes = {
  title: string.isRequired,
  author: string.isRequired,
  year: number.isRequired,
  onClick: func,
};
