'use client';

import { func, number } from 'prop-types';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import { useSelector } from 'react-redux';
import s from './editForm.module.scss';
import Button from '../Button';

export default function EditForm({ id, onClick }) {
  const allBooks = useSelector((state) => state.books.books);
  const { title, author, year } = allBooks.filter((item) => item.id === id)[0];

  return (
    <div className={s.root}>
      <div className={s.header}>
        <h2>Редактирование</h2>
      </div>
      <Button className={s.closeBtn} onClick={onClick} img="/close.svg" alt="close button icon" />
      <div className={s.container}>
        <Formik initialValues={{ title: '', author: '', year: '' }}>
          <Form className={s.form}>
            <div className={s.inputContainer}>
              <p className={s.inputName}>Название:</p>
              <Field type="text" name="title" id="title" value={title} placeholder="Название" maxLength="60" className={s.inputField} />
              <ErrorMessage name="title" component="div" className={s.errorMessage} />
            </div>
            <div className={s.inputContainer}>
              <p className={s.inputName}>Автор:</p>
              <Field type="text" name="author" value={author} placeholder="Aвтор" maxLength="60" className={s.inputField} />
              <ErrorMessage name="author" component="div" className={s.errorMessage} />
            </div>
            <div className={s.inputContainer}>
              <p className={s.inputName}>Год издания:</p>
              <Field type="number" name="year" value={year} placeholder="Год издания" className={s.inputField} />
              <ErrorMessage name="year" component="div" className={s.errorMessage} />
            </div>
            <div className={s.btnContainer}>
              <Button text="Сохранить" type="submit" className={s.saveBtn} />
              <Button text="Сброс" className={s.saveBtn} />
              <Button text="Удалить" className={s.cancelBtn} />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

EditForm.propTypes = {
  id: number.isRequired,
  onClick: func,
};
