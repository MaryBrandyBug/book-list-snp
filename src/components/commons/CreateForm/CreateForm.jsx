'use client';

import { func } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import validationSchema from '@/constants/validation';
import { addBook } from '@/redux/store/slicer/bookSlicer';

import Button from '../Button';

import s from './createForm.module.scss';

export default function CreateForm({ onClick }) {
  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    setTimeout(() => {
      const isValid = validationSchema.isValid(values);
      if (isValid) {
        dispatch(addBook(values));
        onClick();
      }
      actions.setSubmitting(false);
    }, 300);
  };

  const formik = useFormik({ initialValues: { title: '', author: '', year: '' }, onSubmit, validationSchema });

  return (
    <div className={s.root}>
      <div className={s.header}>
        <h2>Новая книга</h2>
      </div>
      <div className={s.container}>
        <form className={s.form} onSubmit={formik.handleSubmit}>
          <div className={s.inputContainer}>
            <input
              type="text"
              name="title"
              placeholder="Название"
              maxLength="60"
              className={s.inputField}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.title && formik.errors.title && (
              <div className={s.errorMessage}>{formik.errors.title}</div>
            )}
          </div>
          <div className={s.inputContainer}>
            <input
              type="text"
              name="author"
              placeholder="Aвтор"
              maxLength="60"
              className={s.inputField}
              onChange={formik.handleChange}
              value={formik.values.author}
            />
            {formik.touched.author && formik.errors.author && (
              <div className={s.errorMessage}>{formik.errors.author}</div>
            )}
          </div>
          <div className={s.inputContainer}>
            <input
              type="number"
              name="year"
              placeholder="Год издания"
              className={s.inputField}
              onChange={formik.handleChange}
              value={formik.values.year}
            />
            {formik.touched.year && formik.errors.year && (
              <div className={s.errorMessage}>{formik.errors.year}</div>
            )}
          </div>
          <div className={s.btnContainer}>
            <Button type="submit" className={s.saveBtn}>Сохранить</Button>
            <Button className={s.cancelBtn} onClick={onClick}>Отмена</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

CreateForm.propTypes = {
  onClick: func,
};
