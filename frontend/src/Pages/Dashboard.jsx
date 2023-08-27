import React, { useState } from "react";
import DashboardSidebar from "../Components/DashboardSidebar";
import { Box, Container, HStack } from "@chakra-ui/react";
import MyProfile from "../DashboardSidebarComponents/MyProfile";
import TermsAndCondition from "../DashboardSidebarComponents/TermsAndCondition";
import PrivacyPolicy from "../DashboardSidebarComponents/PrivacyPolicy";
import Exercises from "../DashboardSidebarComponents/Exercises";

const Dashboard = () => {
  const [tabs, setTabs] = useState({
    profile:false,
    exercise: true,
    TandC: false,
    PP: false,
  });

  //handling Tabs
  const handleProfileTabs = (Tabs)=>{
    setTabs(Tabs)
  }

  return <Box>
    <Container maxW={"8xl"} border={"1px solid green"} h={"90vh"}>
      <HStack spacing={"20px"}>
        <DashboardSidebar handleProfileTabs={handleProfileTabs} />
        <Box border={"1px solid red"} width={"400px"}>
          {tabs.profile ? <MyProfile /> : tabs.TandC ? <TermsAndCondition /> : tabs.PP ? <PrivacyPolicy /> : <Exercises />}
        </Box>
      </HStack>
    </Container>
  </Box>
  
};

export default Dashboard;
