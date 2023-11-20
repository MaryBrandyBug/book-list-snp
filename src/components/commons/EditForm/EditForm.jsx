'use client';

import { func, number } from 'prop-types';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import data from './data';
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

  const inputFields = data.map((item) => (
    <div className={s.inputContainer} key={item.id}>
      <p className={s.inputName}>{`${item.inputName} :`}</p>
      <input type={item.type} name={item.name} placeholder={item.inputName} value={formik.values[item.name]} onChange={formik.handleChange} maxLength={item.maxLength || ''} className={s.inputField} />
      {formik.touched[item.name] && formik.errors[item.name] && (
      <div className={s.errorMessage}>{formik.errors[item.name]}</div>
      )}
    </div>
  ));

  return (
    <div className={s.root}>
      <div className={s.header}>
        <h2>Редактирование</h2>
      </div>
      <Button className={s.closeBtn} onClick={onClick}><img src="/close.svg" alt="close button icon" /></Button>
      <div className={s.container}>
        <form className={s.form} onSubmit={formik.handleSubmit} onReset={formik.resetForm}>
          {inputFields}
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
