'use client';

import { func, number } from 'prop-types';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { editBook, removeBook } from '@/redux/store/slicer/bookSlicer';
import validationSchema from '@/utils/validation';

import Button from '../Button';

import s from './EditForm.module.scss';

export default function EditForm({ id, onClick }) {
  const allBooks = useSelector((state) => state.books);
  const { title, author, year } = allBooks.filter((item) => item.id === id)[0];
  const dispatch = useDispatch();

  const deleteCurrentBook = () => {
    dispatch(removeBook({ id }));
    onClick();
  };

  const onSubmit = (values, actions) => {
    setTimeout(() => {
      const isValid = validationSchema.isValid(values);
      if (isValid) {
        dispatch(editBook({
          values,
          id,
        }));
        onClick();
      }
      actions.setSubmitting(false);
    }, 300);
  };

  const formik = useFormik({ initialValues: { title, author, year }, onSubmit, validationSchema });

  return (
    <div className={s.root}>
      <div className={s.header}>
        <h2>Редактирование</h2>
      </div>
      <Button className={s.closeBtn} onClick={onClick} img="/close.svg" alt="close button icon" />
      <div className={s.container}>
        <form className={s.form} onSubmit={formik.handleSubmit} onReset={formik.resetForm}>
          <div className={s.inputContainer}>
            <p className={s.inputName}>Название:</p>
            <input type="text" name="title" id="title" placeholder="Название" value={formik.values.title} onChange={formik.handleChange} maxLength="60" className={s.inputField} />
            {formik.touched.title && formik.errors.title && (
            <div className={s.errorMessage}>{formik.errors.title}</div>
            )}
          </div>
          <div className={s.inputContainer}>
            <p className={s.inputName}>Автор:</p>
            <input type="text" name="author" placeholder="Aвтор" value={formik.values.author} onChange={formik.handleChange} maxLength="60" className={s.inputField} />
            {formik.touched.author && formik.errors.author && (
            <div className={s.errorMessage}>{formik.errors.author}</div>
            )}
          </div>
          <div className={s.inputContainer}>
            <p className={s.inputName}>Год издания:</p>
            <input type="number" name="year" placeholder="Год издания" value={formik.values.year} onChange={formik.handleChange} className={s.inputField} />
            {formik.touched.year && formik.errors.year && (
            <div className={s.errorMessage}>{formik.errors.year}</div>
            )}
          </div>
          <div className={s.btnContainer}>
            <Button type="submit" className={s.saveBtn}>Сохранить</Button>
            <Button type="reset" className={s.resetBtn}>Сброс</Button>
            <Button className={s.removeBtn} onClick={deleteCurrentBook}>Удалить</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

EditForm.propTypes = {
  id: number.isRequired,
  onClick: func,
};
