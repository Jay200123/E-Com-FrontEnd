import * as yup from "yup";

const SignUpValidationSchema = yup.object({
  fullname: yup.string().required(),
  contact_number: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default SignUpValidationSchema;
