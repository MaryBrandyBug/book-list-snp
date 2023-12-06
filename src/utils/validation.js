import * as yup from 'yup';

export default yup.object().shape({
  title: yup.string().matches(/\S/, 'Строка не должна состоять только из пробелов').required('Обязательно для заполнения!'),
  author: yup.string().matches(/\S/, 'Строка не должна состоять только из пробелов').required('Обязательно для заполнения!'),
  year: yup.number('введите число').required('Обязательно для заполнения!').integer('Введите целое число')
    .min(1900, 'Год должен быть не ранее 1900')
    .max(new Date().getFullYear(), 'Этот год еще не наступил :( попробуйте еще раз')
    .test('not-starts-with-zero', 'Год не может начинаться с 0', (value) => {
      const yearAsString = value.toString().charAt(0);
      return yearAsString !== '0';
    }),
});
