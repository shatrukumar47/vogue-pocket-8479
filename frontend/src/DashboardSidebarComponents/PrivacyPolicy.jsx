import { ListItem, OrderedList, UnorderedList } from '@chakra-ui/react'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div style={{width:"100%", background:"white", padding:"40px", color:"black", display:"flex", flexDirection:"column", gap:"10px", justifyContent:"center" ,textAlign:"justify"}}>
      <h1 style={{fontWeight:"bold"}}>Privacy Policy</h1>
      <p style={{fontWeight:"bold"}}>20 June 2023</p>
      <OrderedList spacing={5}>
        <ListItem>Information We Collect:
          <UnorderedList >
            <ListItem>Personal Information: We may collect certain personal information such as your name, email address, and contact details when you voluntarily provide them to us.</ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>Use of Information:
          <UnorderedList spacing={3}>
            <ListItem>We use the collected information to provide and improve our FitQuest services, personalize your experience, and communicate with you.</ListItem>
            <ListItem>Your personal information will not be shared, sold, rented, or disclosed to any third parties without your consent, except as required by law.</ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>Cookies and Tracking Technologies:
          <UnorderedList>
            <ListItem>We may use cookies and similar tracking technologies to enhance your browsing experience and collect information about how you use our website.</ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>Data Security:
          <UnorderedList spacing={3}>
            <ListItem>We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</ListItem>
            <ListItem>However, please note that no method of transmission over the internet or electronic storage is 100% secure.</ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>Changes to this Privacy Policy:
          <UnorderedList>
            <ListItem>We may update this Privacy Policy from time to time. Any changes will be effective when we post the revised Privacy Policy on our website.</ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>Contact Us:
          <UnorderedList>
            <ListItem>If you have any questions or concerns regarding this Privacy Policy, please contact us at [@shatrukumar47@gmail.com].</ListItem>
          </UnorderedList>
        </ListItem>
      </OrderedList>

      <h1 style={{fontWeight:"bold", marginTop:"30px", textAlign:"center"}}>[ Note : This is just a dummy content with no legal guidance ]</h1>
    </div>
  )
}

export default PrivacyPolicy
