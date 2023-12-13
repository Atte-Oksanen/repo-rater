import { Pressable, StyleSheet, Text, View } from "react-native"
import FormikTextInput from "./FormikTextInput"

const ReviewForm = ({ onSubmit }) => {
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
      <FormikTextInput name={'ownerName'} placeholder={'Repository owner name'} />
      <FormikTextInput name={'rating'} placeholder={'Rating'} />
      <FormikTextInput name={'repositoryName'} placeholder={'Repository name'} />
      <FormikTextInput name={'text'} placeholder={'Review text'} />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>
          Submit review
        </Text>
      </Pressable>
    </View>
  )
}

export default ReviewForm