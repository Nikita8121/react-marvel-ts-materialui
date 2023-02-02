import { useFormik } from "formik";
import * as yup from "yup";
import { IMakeOrder } from "../../shared/services/apiService/orderApiService/order.api.service.types";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  secondName: yup.string().required("secondName is required"),
  city: yup.string().required("city is required"),
  street: yup.string().required("street is required"),
  payment: yup.string().required("street is required"),
});

const useValidation = (
  submitFunc: (
    data: Omit<IMakeOrder, "userId" | "totalPrice" | "items">,
  ) => void,
) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      secondName: "",
      city: "",
      street: "",
      payment: "Cash",
    },
    validationSchema,
    onSubmit: (data) => {
      submitFunc(data);
    },
  });

  return formik;
};

export default useValidation;
