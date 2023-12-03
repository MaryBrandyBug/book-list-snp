'use client';

import { func, string } from 'prop-types';

import s from './SearchField.module.scss';

export default function SearchField({ handleChange, value }) {
  return (
    <div className={s.root}>
      <div className={s.searchForm}>
        <input type="text" placeholder="Начать поиск" value={value} onChange={handleChange} />
      </div>
    </div>
  );
}

SearchField.propTypes = {
  handleChange: func.isRequired,
  value: string,
};
