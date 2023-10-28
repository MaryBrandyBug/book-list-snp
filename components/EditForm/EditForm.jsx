'use client';

import { func, number } from 'prop-types';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { editBook } from '@/redux/store/slicer/bookSlicer';
import s from './editForm.module.scss';
import Button from '../Button';

export default function EditForm({ id, onClick }) {
  const allBooks = useSelector((state) => state.books);
  const { title, author, year } = allBooks.filter((item) => item.id === id)[0];
  const dispatch = useDispatch();

  return (
    <div className={s.root}>
      <div className={s.header}>
        <h2>Редактирование</h2>
      </div>
      <Button className={s.closeBtn} onClick={onClick} img="/close.svg" alt="close button icon" />
      <div className={s.container}>
        <Formik
          initialValues={{ title, author, year }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              dispatch(editBook({
                values,
                id,
              }));
              onClick();
              actions.setSubmitting(false);
            }, 300);
          }}
        >
          { ({ handleSubmit, resetForm }) => (
            <Form className={s.form} onSubmit={handleSubmit}>
              <div className={s.inputContainer}>
                <p className={s.inputName}>Название:</p>
                <Field type="text" name="title" id="title" placeholder="Название" maxLength="60" className={s.inputField} />
                <ErrorMessage name="title" component="div" className={s.errorMessage} />
              </div>
              <div className={s.inputContainer}>
                <p className={s.inputName}>Автор:</p>
                <Field type="text" name="author" placeholder="Aвтор" maxLength="60" className={s.inputField} />
                <ErrorMessage name="author" component="div" className={s.errorMessage} />
              </div>
              <div className={s.inputContainer}>
                <p className={s.inputName}>Год издания:</p>
                <Field type="number" name="year" placeholder="Год издания" className={s.inputField} />
                <ErrorMessage name="year" component="div" className={s.errorMessage} />
              </div>
              <div className={s.btnContainer}>
                <Button text="Сохранить" type="submit" className={s.saveBtn} />
                <Button text="Сброс" type="reset" className={s.saveBtn} onClick={resetForm} />
                <Button text="Удалить" className={s.cancelBtn} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

EditForm.propTypes = {
  id: number.isRequired,
  onClick: func,
};
