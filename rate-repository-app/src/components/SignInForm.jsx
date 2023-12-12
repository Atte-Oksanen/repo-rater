import { Pressable, StyleSheet, Text, View } from "react-native"
import FormikTextInput from "./FormikTextInput"

const SignInForm = ({ onsubmit }) => {
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
      <Pressable style={styles.button} onPress={onsubmit}>
        <Text style={styles.buttonText}>
          Sign in
        </Text>
      </Pressable>
    </View>
  )
}

export default SignInForm