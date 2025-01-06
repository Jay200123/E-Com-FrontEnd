import * as yup from "yup";

const createProductValidationSchema = yup.object({
  brand: yup.string().required(),
  product_name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required(),
  color: yup.string().required(),
  category: yup.string().required(),
  quantity: yup.number().required(),
});

export default createProductValidationSchema;
