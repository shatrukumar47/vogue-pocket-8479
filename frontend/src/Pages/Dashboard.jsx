import React, { useState } from "react";
import DashboardSidebar from "../Components/DashboardSidebar";
import { Box, Container, HStack } from "@chakra-ui/react";
import MyProfile from "../DashboardSidebarComponents/MyProfile";
import TermsAndCondition from "../DashboardSidebarComponents/TermsAndCondition";
import PrivacyPolicy from "../DashboardSidebarComponents/PrivacyPolicy";
import Exercise from "./Exercise";
import UserExercise from "./UserExercise";

const Dashboard = () => {
  const [tabs, setTabs] = useState({
    profile:false,
    exercise: true,
    TandC: false,
    PP: false,
    records: false
  });

  //handling Tabs
  const handleProfileTabs = (Tabs)=>{
    setTabs(Tabs)
  }

  return <Box>
    <Container maxW={"8xl"} h={"855px"}>
      <HStack spacing={"20px"} alignItems={"flex-start"}>
        <DashboardSidebar handleProfileTabs={handleProfileTabs} />
        <Box paddingRight={"30px"} borderRight={"2px solid #00163A"} width={"70%"} height={"855px"}>
          {tabs.profile ? <MyProfile /> : tabs.TandC ? <TermsAndCondition /> : tabs.PP ? <PrivacyPolicy /> : tabs.records ? <UserExercise /> : <Exercise />}
        </Box>
      </HStack>
    </Container>
  </Box>
  
};

export default Dashboard;
