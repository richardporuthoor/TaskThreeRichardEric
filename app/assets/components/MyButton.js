import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

function MyButton({title, onPress, underColor, backColor}) {
  return(
    <TouchableHighlight
          onPress={onPress}
          underlayColor={underColor}    
          style={[styles.button, {backgroundColor: backColor}]}>
          <Text style={styles.text}>{title}</Text>
      </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
button: {
    height: 40,
    width: 100,
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderWidth: 2,
  },
})
export default MyButton;