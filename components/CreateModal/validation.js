import * as yup from 'yup';

export default yup.object().shape({
  title: yup.string().required('Обязательно для заполнения!'),
  author: yup.string().required('Обязательно для заполнения!'),
  year: yup.number('введите число').required('Обязательно для заполнения!').integer('Введите целое число')
    .min(1, 'Введите значение не равное 0')
    .max(new Date().getFullYear(), 'Этот год еще не наступил :( попробуйте еще раз')
    .test('not-starts-with-zero', 'Год не может начинаться с 0', (value) => {
      const yearAsString = value.toString();
      return yearAsString.charAt(0) === 0;
    }),
});
