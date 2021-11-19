import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import BackButton from '../components/BackButton'

export default function PatientInfoScreen({ route, navigation }) {
  const {
    info
  } = route.params
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Patient Info</Header>
      <Paragraph>
        {JSON.stringify(info)}
      </Paragraph>
      
    </Background>
  )
}
