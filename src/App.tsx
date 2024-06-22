import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CurrencyButton from './components/CurrencyButton'


//Constants
import { currencyByRupee } from './constants'
function App(): JSX.Element {
  return (
    <SafeAreaView> 
      <StatusBar>

      </StatusBar>

    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f7fc',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'space-evenly',
   
  },
  resultTxt:{
    fontSize:32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee:{
    marginRight: 8,
    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField:{
    height:60,
    width:200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
  bottomContainer: {
    flex:3,
  },
  button:{
    flex: 1,
  margin: 12,
  height:60,
  
  borderRadius:12,
  backgroundColor: '#fff',
  elevation:2,
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowColor: '#333',
  shadowOpacity: 0.1,
  shadowRadius: 1,
  },
  selected:{
    backgroundColor: '#ffeaa7',
  },
 
  
})