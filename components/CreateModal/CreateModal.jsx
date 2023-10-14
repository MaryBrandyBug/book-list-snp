import { func } from 'prop-types';
import Button from '../Button';
import InputField from '../InputField';
import s from './createModal.module.scss';

export default function CreateModal({ onClick }) {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <div className={s.header}>
          <h2>Новая книга</h2>
        </div>
        <div className={s.container}>
          <form className={s.form}>
            <InputField type="text" name="title" placeholder="Название" maxLength="60" />
            <InputField type="text" name="author" placeholder="Aвтор" maxLength="60" />
            <InputField type="number" name="year" placeholder="Год издания" />
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
