import { Formik } from "formik"
import SignUpForm from "./SignUpForm"
import { object, ref, string } from "yup"
import useCreateUser from "../hooks/useCreateUser"
import { useNavigate } from "react-router-native"



const SignUp = () => {
  const [signUp] = useCreateUser()
  const navigate = useNavigate()

  const validationSchema = object({
    username: string().required().min(5).max(30),
    password: string().required().min(5).max(50),
    passwordConfirm:
      string().oneOf([ref('password'), null], 'Passwords must match')
  })

  const submitForm = async values => {
    await signUp(values)
    navigate('/')
  }

  return (
    <Formik
      initialValues={{ username: '', password: '', passwordConfirm: '' }}
      onSubmit={values => submitForm(values)}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignUp