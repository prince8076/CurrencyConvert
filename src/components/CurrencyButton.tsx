import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import type { PropsWithChildren } from 'react'

// Define the props type
type CurrencyButtonProps = PropsWithChildren<{ 
    name: string,
    flag: string,
}>

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country} numberOfLines={1} ellipsizeMode='tail'>{props.name}</Text>
    </View>
  )
}

export default CurrencyButton

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    width: 100, // Set a fixed width
  },
  flag: {
    fontSize: 30,
    color: 'black',
    marginBottom: 4,
  },
  country: {
    fontSize: 14,
    color: '#2d3436',
    textAlign: 'center', // Center the text
  }
})
