import * as Yup from "yup";

export const initialValues = { title: "", description: "", file: null };

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Esse campo é obrigatorio"),
  description: Yup.string().required("Esse campo é obrigatorio"),
  file: Yup.mixed()
    .required("Esse campo é obrigatorio")
    .test("validFile", "Formato invalido", (value) => {
      if (value) {
        return /video\/*/.test(value.type);
      }
      return false;
    }),
});
