import { StyleSheet, Text, View } from 'react-native'

const ItemTextField = ({ mainElement, secondaryElement }) => {

  const styles = StyleSheet.create({
    item: {
      flex: 1,
      maxWidth: '25%',
      alignItems: 'center'
    },
    bold: {
      fontWeight: 500
    },
    lightText: {
      color: '#4d4d4d'
    }
  })

  const getTextFormat = (input) => {
    return input >= 1000 ? `${Math.round(input / 100) / 10}k` : input
  }
  return (
    <View style={styles.item}>
      <Text>
        <Text style={styles.bold}>
          {getTextFormat(mainElement)}
        </Text>
        <br />
        <Text style={styles.lightText}>
          {secondaryElement}
        </Text>
      </Text>
    </View>
  )
}

export default ItemTextField