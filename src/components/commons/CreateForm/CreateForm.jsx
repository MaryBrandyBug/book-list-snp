'use client';

import { func } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import validationSchema from '@/utils/validation';
import data from './data';
import { addBook } from '@/redux/store/slicer/bookSlicer';

import Button from '../Button';

import s from './CreateForm.module.scss';

export default function CreateForm({ onClick }) {
  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
    const isValid = await validationSchema.isValid(values);
    if (isValid) {
      fetch('http://localhost:8000/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((res) => dispatch(addBook(res)));
      onClick();
    }

    actions.setSubmitting(false);
  };

  const formik = useFormik({ initialValues: { title: '', author: '', year: '' }, onSubmit, validationSchema });

  const inputFields = data.map((item) => (
    <div key={item.id} className={s.inputContainer}>
      <input
        type={item.type}
        name={item.name}
        placeholder={item.placeholder || ''}
        maxLength={item.maxLength || ''}
        className={s.inputField}
        onChange={formik.handleChange}
        value={formik.values[item.name]}
      />
      {formik.touched[item.name] && formik.errors[item.name] && (
      <div className={s.errorMessage}>{formik.errors[item.name]}</div>
      )}
    </div>
  ));

  return (
    <div className={s.root}>
      <div className={s.header}>
        <h2>Новая книга</h2>
      </div>
      <div className={s.container}>
        <form className={s.form} onSubmit={formik.handleSubmit}>
          {inputFields}
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
