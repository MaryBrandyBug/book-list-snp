import Button from '@/components/commons/Button';

import s from './ErrorPage.module.scss';

export default function ErrorPage() {
  return (
    <div className={s.root}>
      <p>Ничего не найдено...</p>
      <p>
        <Button href="/">Кликнуть</Button>
        {' '}
        и вернуться на главную
      </p>
    </div>
  );
}
