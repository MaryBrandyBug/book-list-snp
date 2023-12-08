'use client';

import { func, string } from 'prop-types';
import Image from 'next/image';

import Button from '../Button';

import s from './SearchField.module.scss';

export default function SearchField({ handleChange, value, onClick }) {
  return (
    <div className={s.root}>
      <div className={s.searchForm}>
        <input type="text" placeholder="Начать поиск" value={value} onChange={handleChange} />
        <Button onClick={onClick} className={s.resetBtn}>
          <Image src="/cross.svg" alt="reset button icon" width={50} height={50} />
        </Button>
      </div>
    </div>
  );
}

SearchField.propTypes = {
  handleChange: func.isRequired,
  value: string,
  onClick: func,
};
