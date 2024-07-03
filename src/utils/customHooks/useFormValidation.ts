import { useFormik } from "formik";
import { ObjectSchema } from "yup";

interface FormValues {
  [key: string]: any;
}

interface UseFormValidationProps {
  initialValues: FormValues;
  validationSchema: ObjectSchema<any>;
  onSubmit: (values: FormValues) => void;
}

const useFormValidation = ({
  initialValues,
  validationSchema,
  onSubmit,
}: UseFormValidationProps) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return formik;
};

export default useFormValidation;
