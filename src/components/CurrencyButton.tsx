import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import type { PropsWithChildren } from 'react'

// Require fields from Component
type CurrencyButtonPros = PropsWithChildren <{ 
    name : string,
    flag : string, 
    // if we need more field values than the default 
}>


const CurrencyButton = (props: CurrencyButtonPros): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  )
}

export default CurrencyButton

const styles = StyleSheet.create({
    buttonContainer:{
        alignItems: 'center',
    },
    flag :{
        fontSize: 30,
        color: 'black',
        marginBottom: 4,
    },
    country :{
        fontSize: 14,
        color: '#2d3436',
    }
})