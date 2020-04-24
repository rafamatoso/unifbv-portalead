import * as Yup from "yup";

export const initialValues = { title: "", description: "", file: null };

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Esse campo é obrigatorio"),
  description: Yup.string().required("Esse campo é obrigatorio"),
  file: Yup.mixed()
    .required("Esse campo é obrigatorio")
    .test("validFile", "Formato invalido", (value) => {
      var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      );
      if (value) {
        return /video\/*/.test(value.type) || !!pattern.test(value);
      }
      return false;
    }),
});
