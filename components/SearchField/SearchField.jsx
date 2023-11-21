'use client';

import { func } from 'prop-types';

import s from './SearchField.module.scss';

export default function SearchField({ handleChange }) {
  return (
    <div className={s.root}>
      <div className={s.searchForm}>
        <input type="text" placeholder="Начать поиск" onChange={handleChange} />
      </div>
    </div>
  );
}

SearchField.propTypes = {
  handleChange: func.isRequired,
};
