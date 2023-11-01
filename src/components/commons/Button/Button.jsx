'use client';

import { func, string } from 'prop-types';
import cx from 'classnames';

import s from './Button.module.scss';

export default function Button({
  type = 'button', img, text, alt, className, imgClassName, onClick,
}) {
  const handleClick = () => {
    if (onClick) {
      onClick(false);
    }
  };

  return (
    <button type={type} className={cx(s.root, className)} onClick={handleClick}>
      <img className={imgClassName} src={img} alt={alt} />
      {text}
    </button>
  );
}

Button.propTypes = {
  type: string,
  img: string,
  text: string,
  alt: string,
  className: string,
  imgClassName: string,
  onClick: func,
};