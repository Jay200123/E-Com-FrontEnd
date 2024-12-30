import * as yup from 'yup';

const SignInValidationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default SignInValidationSchema;