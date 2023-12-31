import { View } from "react-native";
import { Formik } from 'formik';
import SignInForm from "./SignInForm";
import { string, object } from 'yup';
import useSignIn from "../hooks/useSignIn";
import useAuthStorage from "../hooks/useAuthStorage";
import { useNavigate } from "react-router-native";
import React from "react";

const SignIn = ({ submitFunction }) => {
  const authStorage = useAuthStorage()
  const [signIn] = useSignIn()
  const navigate = submitFunction ? null : useNavigate()

  const validationSchema = object({
    username: string().required(),
    password: string().required()
  })

  const submitForm = async values => {
    const { username, password } = values
    try {
      const res = await signIn({ username, password })
      await authStorage.setAccessToken(res.authenticate.accessToken)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View>
      <Formik initialValues={{ username: '', password: '' }} onSubmit={submitFunction ? values => submitFunction(values) : values => submitForm(values)} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onsubmit={handleSubmit} />}
      </Formik>
    </View>);
};

export default SignIn;