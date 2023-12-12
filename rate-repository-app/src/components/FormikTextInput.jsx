import { StyleSheet, Text, TextInput } from 'react-native';
import { useField } from 'formik';
const styles = StyleSheet.create({
  errorText: {
    marginTop: 2,
    color: 'red'
  },
  textBox: {
    border: '1px solid #bfbfbf',
    padding: 5,
    borderRadius: 3,
    marginBottom: 5
  },
  textBoxError: {
    border: '1px solid red',
    padding: 5,
    borderRadius: 3,
    marginBottom: 5
  }

});

const FormikTextInput = ({ name, password, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.error;
  return (
    <>
      <TextInput
        style={showError ? styles.textBoxError : styles.textBox}
        secureTextEntry={password}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;