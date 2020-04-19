import * as Yup from 'yup';

export const initialValues = { email: '', password: '' };

export const validationSchema = Yup.object({
  email: Yup.string()
    .email('Endereço de E-mail Inválido')
    .required('É necessário um E-mail'),
  password: Yup.string()
    .min(6, 'Necessários ao menos 6 caracteres')
    .required('É necessária uma Senha'),
});
