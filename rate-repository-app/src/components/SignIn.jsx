import { View } from "react-native";
import { Formik } from 'formik';
import SignInForm from "./SignInForm";
import { string, object } from 'yup';
const SignIn = () => {

  const validationSchema = object({
    username: string().required(),
    password: string().required()
  })
  return (
    <View>
      <Formik initialValues={{ username: '', password: '' }} onSubmit={values => console.log(values)} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onsubmit={handleSubmit} />}
      </Formik>
    </View>);
};

export default SignIn;