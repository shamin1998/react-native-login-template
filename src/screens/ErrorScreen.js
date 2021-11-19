import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import BackButton from '../components/BackButton'

export default function ErrorScreen({ navigation }) {
  
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>ERROR</Header>
   
    </Background>
  )
}
