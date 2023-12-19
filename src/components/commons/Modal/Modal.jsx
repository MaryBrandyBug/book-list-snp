'use client';

import { any, string } from 'prop-types';
import cx from 'classnames';

import s from './Modal.module.scss';

export default function Modal({ children, className }) {
  return (
    <div className={cx([s.root], className)}>
      {children}
    </div>
  );
}

Modal.propTypes = {
  children: any,
  className: string,
};
