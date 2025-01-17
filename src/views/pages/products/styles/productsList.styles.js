// src\views\pages\products\styles\productsList.styles.js
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    root: {
      backgroundColor: '#ffffff',
      marginTop: 10,
    },
    container: {
      paddingLeft: 19,
      paddingRight: 16,
      paddingVertical: 12,
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    content: {
      marginLeft: 16,
      flex: 1,
    },
    contentHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 6,
    },
    separator: {
      height: 1,
      backgroundColor: '#CCCCCC',
    },
    image: {
      width: 45,
      height: 45,
      borderRadius: 5,
      marginLeft: 20,
    },
    time: {
      fontSize: 11,
      color: '#808080',
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  })