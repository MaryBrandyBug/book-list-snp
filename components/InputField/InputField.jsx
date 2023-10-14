import cx from 'classnames/bind';
import { string, func } from 'prop-types';
import s from './inputField.module.scss';

export default function InputField({
  className, type, name, onChange, placeholder, maxLength, value,
}) {
  return (
    <input className={cx(s.root, className)} type={type} name={name} onChange={onChange} placeholder={placeholder} maxLength={maxLength} value={value} />
  );
}

InputField.propTypes = {
  className: string,
  type: string,
  name: string,
  onChange: func,
  placeholder: string,
  maxLength: string,
  value: string,
};
