import { Form as FormikForm, Formik, FormikConfig } from "formik";
import { DevTools } from "./DevTools";

type Props = {
  hasDevTools?: boolean;
  children?: React.ReactNode;
};

export const AppForm: React.FC<Props & FormikConfig<any>> = ({
  hasDevTools,
  children,
  ...rest
}) => {
  return (
    <Formik {...rest}>
      <FormikForm style={{ width: "100%" }}>
        {children}
        {hasDevTools && <DevTools />}
      </FormikForm>
    </Formik>
  );
};
