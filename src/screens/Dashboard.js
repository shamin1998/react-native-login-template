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
    details,
    status,
  } = route.params

  console.warn(
    token,
    type,
    name,
    details,
    status
  )

  const viewChiefComplaints = async () => {
    
    navigation.navigate('ChiefComplaintsScreen', {
      
      complaints: details['chief-complaints'],
      // patientInfo: complaintjson['patient-info'],
      // prescriptions: complaintjson.prescriptions,
      // status: status,
    })
  }

  const viewGeneralExaminations = async () => {
    
    navigation.navigate('GeneralExaminationsScreen', {
      
      exams: details['general-examinations'],
      // patientInfo: complaintjson['patient-info'],
      // prescriptions: complaintjson.prescriptions,
      // status: status,
    })
  }


  // return (
  //   <Background>
  //     <Logo />
  //     <Header>Let’s start</Header>
  //     <Paragraph>{JSON.stringify(chiefComplaints)}</Paragraph>
  //     <Button
  //       mode="outlined"
  //       onPress={() =>
  //         navigation.reset({
  //           index: 0,
  //           routes: [{ name: 'StartScreen' }],
  //         })
  //       }
  //     >
  //       Logout
  //     </Button>
  //   </Background>
  // )

  return (
    <Background>
      {/* <BackButton goBack={navigation.goBack} /> */}
      
      <Header>Tasks</Header>
      
      <Button mode="contained" onPress={viewChiefComplaints}>
        View Chief Complaints
      </Button>

      <Button mode="contained" onPress={viewGeneralExaminations}>
        General Examinations
      </Button>
      
    </Background>
  )

}
