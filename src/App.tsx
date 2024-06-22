import React, { useState } from 'react'
import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import Snackbar from 'react-native-snackbar'

// Constants
import { currencyByRupee } from './constants'
import CurrencyButton from './components/CurrencyButton'

function App(): JSX.Element {
  // State variables to manage user input, conversion result, and selected currency
  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('0 🤑')
  const [targetCurrency, setTargetCurrency] = useState('')

  // Function to handle button press for currency conversion
  const buttonPress = (targetValue: any) => {
    // Show a snackbar if the input value is empty
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please enter an amount',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      })
    }
    // Parse the input value to a float
    const inputAmount = parseFloat(inputValue)
    // Check if the input value is a valid number and greater than 0
    if (!isNaN(inputAmount) && inputAmount > 0) {
      // Perform currency conversion
      const convertedValue = inputAmount * targetValue.value
      // Format the result with the currency symbol
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)} 🤑`
      // Update the state with the result and selected currency
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else {
      // Show a snackbar if the input value is invalid
      return Snackbar.show({
        text: 'Please enter a valid amount',
        backgroundColor: '#F4BE2C',
        textColor: '#000000',
      })
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar />
      <View style={styles.container}>
        {/* Top container for input field and result */}
        <View style={styles.topContainer}>
          <View style={styles.rupeeContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              clearButtonMode='always' // only for iOS
              onChangeText={setInputValue}
              keyboardType='numeric'
              placeholder='Enter Amount in Rupees'
              placeholderTextColor='#7f8c8d'
              style={styles.inputAmountField}
            />
          </View>
          {/* Display the conversion result */}
          {resultValue && (
            <Text style={styles.resultTxt}>{resultValue}</Text>
          )}
        </View>
        {/* Bottom container for currency buttons */}
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.button,
                  // Highlight the selected button
                  targetCurrency === item.name ? styles.selected : null
                ]}
                onPress={() => buttonPress(item)}
              >
                {/* Custom component to display currency flag and name */}
                <CurrencyButton name={item.name} flag={item.flag} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f7fc',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  rupeeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  inputAmountField: {
    height: 60,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    fontSize: 18,
    color: '#000000', // Ensure the text is visible
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
    marginTop: 20,
  },
  bottomContainer: {
    flex: 3,
    marginTop: 16,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
})
