'use client';

import { func } from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook } from '@/redux/store/slicer/bookSlicer';
import {
  ErrorMessage, Formik, Field, Form,
} from 'formik';
import Button from '../Button';
import s from './createModal.module.scss';
import validationSchema from './validation';

export default function CreateForm({ onClick }) {
  const dispatch = useDispatch();

  return (
    <div className={s.root}>
      <div className={s.header}>
        <h2>Новая книга</h2>
      </div>
      <div className={s.container}>
        <Formik
          initialValues={{ title: '', author: '', year: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              const isValid = validationSchema.isValid(values);
              if (isValid) {
                dispatch(addBook(values));
                onClick();
              }
              actions.setSubmitting(false);
            }, 300);
          }}
        >
          { ({ handleSubmit }) => (
            <Form className={s.form} onSubmit={handleSubmit}>
              <div className={s.inputContainer}>
                <Field type="text" name="title" placeholder="Название" maxLength="60" className={s.inputField} />
                <ErrorMessage name="title" component="div" className={s.errorMessage} />
              </div>
              <div className={s.inputContainer}>
                <Field type="text" name="author" placeholder="Aвтор" maxLength="60" className={s.inputField} />
                <ErrorMessage name="author" component="div" className={s.errorMessage} />
              </div>
              <div className={s.inputContainer}>
                <Field type="number" name="year" placeholder="Год издания" className={s.inputField} />
                <ErrorMessage name="year" component="div" className={s.errorMessage} />
              </div>
              <div className={s.btnContainer}>
                <Button text="Сохранить" type="submit" className={s.saveBtn} />
                <Button text="Отмена" className={s.cancelBtn} onClick={onClick} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

CreateForm.propTypes = {
  onClick: func,
};
