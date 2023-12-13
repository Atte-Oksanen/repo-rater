import { Pressable, StyleSheet, Text, View } from "react-native"
import FormikTextInput from "./FormikTextInput"

const SignUpForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    button: {
      padding: 5,
      backgroundColor: '#007dff',
      color: 'white',
      borderRadius: 3
    },
    buttonText: {
      color: 'white',
      textAlign: 'center'
    },
    container: {
      margin: 5
    }
  })
  return (
    <View style={styles.container}>
      <FormikTextInput name={'username'} placeholder={'Username'}></FormikTextInput>
      <FormikTextInput name={'password'} placeholder={'Password'} password={true}></FormikTextInput>
      <FormikTextInput name={'passwordConfirm'} placeholder={'Confirm password'} password={true}></FormikTextInput>
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>
          Sign up
        </Text>
      </Pressable>
    </View>
  )
}

export default SignUpForm