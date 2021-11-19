import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function Dashboard({ route, navigation }) {
  // this is a concept called Destructuring
  // use same names by which values are sent
  const {
    token,
    type,
    name,
    chiefComplaints,
    generalExaminations,
    patientInfo,
    prescriptions,
    status,
  } = route.params

  console.warn(
    token,
    type,
    name,
    chiefComplaints,
    generalExaminations,
    patientInfo,
    prescriptions,
    status
  )

  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>itemId: {token}</Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
