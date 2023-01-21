import { useFormik } from "formik";
import * as yup from "yup";
import { ISignUpData } from "../../shared/services/apiService/userApiService/user.api.service.types";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const useValidation = (
  submitFunc: ({ data }: { data: ISignUpData }) => void,
) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (data) => {
      submitFunc({ data });
    },
  });

  return formik;
};

export default useValidation;
