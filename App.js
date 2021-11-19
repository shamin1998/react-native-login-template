import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  PatientInfoScreen,
  LoginScreen,
  ChiefComplaintsScreen,
  GeneralExaminationsScreen,
  Dashboard,
  PrescriptionsScreen,
  ErrorScreen,
} from './src/screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ChiefComplaintsScreen" component={ChiefComplaintsScreen} />
          <Stack.Screen name="GeneralExaminationsScreen" component={GeneralExaminationsScreen} />
          <Stack.Screen name="PatientInfoScreen" component={PatientInfoScreen} />
          <Stack.Screen name="PrescriptionsScreen" component={PrescriptionsScreen} />
          <Stack.Screen name="ErrorScreen" component={ErrorScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
