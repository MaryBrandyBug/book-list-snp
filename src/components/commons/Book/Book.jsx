'use client';

import { func, number, string } from 'prop-types';
import Image from 'next/image';

import Button from '../Button';

import s from './Book.module.scss';

export default function Book({
  title, author, year, id, previewContent, editContent,
}) {
  const handlePreviewContent = () => {
    previewContent({
      title, author, year, id,
    });
  };

  const handleEditContent = () => {
    editContent({ id });
  };

  return (
    <div className={s.root}>
      <Button href={`/${id}`} as={id} className={s.contentLink}>
        <div className={s.contentWrapper}>
          <div className={s.header}>
            <h2>{title}</h2>
          </div>
          <div className={s.content}>
            <div className={s.container}>
              <p className={s.info}>{author}</p>
              <p className={s.info}>{year}</p>
            </div>
          </div>
        </div>
      </Button>
      <div className={s.footer}>
        <Button onClick={handleEditContent}><Image src="/edit.svg" alt="edit icon" width={50} height={50} /></Button>
        <Button onClick={handlePreviewContent}><Image src="/eye.svg" alt="zoom icon" width={50} height={50} /></Button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: string.isRequired,
  author: string.isRequired,
  year: number.isRequired,
  id: string.isRequired,
  previewContent: func,
  editContent: func,
};
