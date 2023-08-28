import React from "react";
import { ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";

const TermsAndCondition = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "white",
        padding: "40px",
        color: "black",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        textAlign: "justify",
      }}
    >
      <h1 style={{ fontWeight: "bold" }}>Terms and Conditions</h1>
      <p style={{ fontWeight: "bold" }}>20 June 2023</p>
      <OrderedList spacing={5}>
        <ListItem>
          Acceptance of Terms:
          <UnorderedList>
            <ListItem>
              By accessing or using our website, you agree to be bound by these
              Terms and Conditions and all applicable laws and regulations.
            </ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          Use of the Website:
          <UnorderedList spacing={3}>
            <ListItem>
              Our website is intended for informational purposes only. The
              content provided is not meant to replace professional medical
              advice or treatment. Please consult a healthcare professional for
              any medical concerns or questions.
            </ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          Intellectual Property:
          <UnorderedList>
            <ListItem>
              All intellectual property rights related to our website, including
              but not limited to text, graphics, logos, images, and software,
              are the property of FitQuest or its licensors and are protected
              by applicable copyright and other intellectual property laws.
            </ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          Modifications:
          <UnorderedList spacing={3}>
            <ListItem>
              We reserve the right to modify or update these Terms and
              Conditions at any time. It is your responsibility to review this
              document periodically for any changes.
            </ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          User Responsibilities:
          <UnorderedList>
            <ListItem>
              You are responsible for ensuring the accuracy and completeness of
              the information you provide when using our website.
            </ListItem>
            <ListItem>
              You agree not to engage in any unauthorized use, reproduction,
              distribution, or modification of our website's content.
            </ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          Contact Us:
          <UnorderedList>
            <ListItem>
              If you have any questions or concerns regarding these Terms and
              Conditions, please contact us at [@shatrukumar47@gmail.com].
            </ListItem>
          </UnorderedList>
        </ListItem>
      </OrderedList>

      <h1
        style={{ fontWeight: "bold", marginTop: "30px", textAlign: "center" }}
      >
        [ Note : This is just a dummy content with no legal guidance ]
      </h1>
    </div>
  );
};

export default TermsAndCondition;
