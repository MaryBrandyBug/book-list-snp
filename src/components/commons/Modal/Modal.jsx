'use client';

import { node } from 'prop-types';

import s from './Modal.module.scss';

export default function Modal({ content }) {
  return (
    <div className={s.root}>
      {content}
    </div>
  );
}

Modal.propTypes = {
  content: node.isRequired,
};
