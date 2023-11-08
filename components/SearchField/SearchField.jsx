'use client';

import { func } from 'prop-types';

import s from './SearchField.module.scss';

export default function SearchField({ handleChange, onSubmit }) {
  return (
    <div className={s.root}>
      <form className={s.searchForm} onSubmit={onSubmit}>
        <input type="text" placeholder="Начать поиск" onChange={handleChange} />
      </form>
    </div>
  );
}

SearchField.propTypes = {
  handleChange: func.isRequired,
  onSubmit: func,
};
