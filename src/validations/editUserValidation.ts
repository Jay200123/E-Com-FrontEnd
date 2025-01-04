import * as yup from "yup";

const EditUserValidationSchema = yup.object({
  fullname: yup.string().required(),
  contact_number: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
});

export default EditUserValidationSchema;
