'use client';

import { func } from 'prop-types';
import { useState } from 'react';
import Button from '../Button';
import InputField from '../InputField';
import s from './createModal.module.scss';

export default function CreateModal({ onClick }) {
  const [form, setForm] = useState({ title: '', author: '', year: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={s.header}>
          <h2>Новая книга</h2>
        </div>
        <div className={s.container}>
          <form className={s.form}>
            <InputField type="text" name="title" placeholder="Название" maxLength="60" value={form.title} onChange={handleChange} />
            <InputField type="text" name="author" placeholder="Aвтор" maxLength="60" value={form.author} onChange={handleChange} />
            <InputField type="number" name="year" placeholder="Год издания" value={form.year} onChange={handleChange} />
            <div className={s.btnContainer}>
              <Button text="Сохранить" className={s.saveBtn} />
              <Button text="Отмена" className={s.cancelBtn} onClick={onClick} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

CreateModal.propTypes = {
  onClick: func,
};
