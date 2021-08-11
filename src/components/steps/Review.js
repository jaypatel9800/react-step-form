import React from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  ListItemText,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DoneAllRoundedIcon from "@material-ui/icons/DoneAllRounded";

export const Review = ({
  navigation,
  firstName,
  lastName,
  middleName,
  email,
  website,
  contactNo,
  profileImg,
}) => {
  const { go } = navigation;
  console.log(profileImg);
  return (
    <Container maxWidth="sm">
      <h3>4. Review</h3>
      <RenderAccordion
        summary="Personal Information"
        to="Personal"
        go={go}
        details={[
          { "First Name": firstName },
          { "Middle Name": middleName },
          { "Last Name": lastName },
        ]}
      />
      <RenderAccordion
        summary="Contact Information"
        go={go}
        to="Contact"
        details={[
          { "E-Mail": email },
          { Website: website },
          { "Contact No.": contactNo },
        ]}
      />
      <RenderAccordionImage
        summary="Profile Image"
        to="Profilepicture"
        go={go}
        profileImg={profileImg}
      />
      <Button
        color="primary"
        variant="outlined"
        style={{ margin: "2rem 10%", width: "80%" }}
        onClick={() => go("submit")}
      >
        <DoneAllRoundedIcon fontSize="large" />
      </Button>
    </Container>
  );
};

export const RenderAccordion = ({ summary, go, details, to }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      {summary}
    </AccordionSummary>
    <AccordionDetails>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return (
            <ListItemText key={index}>
              {`${objKey} :- `}{" "}
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  letterSpacing: "0.3px",
                }}
              >
                {objValue}
              </span>
            </ListItemText>
          );
        })}
        <IconButton
          color="secondary"
          component="span"
          onClick={() => go(`${to.toLowerCase()}`)}
        >
          <EditOutlinedIcon />
        </IconButton>
      </div>
    </AccordionDetails>
  </Accordion>
);

export const RenderAccordionImage = ({ summary, profileImg, go, to }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      {summary}
    </AccordionSummary>
    <AccordionDetails>
      <div style={{ width: "100%", textAlign: "center" }}>
        {profileImg.length !== 0 && (
          <img
            style={{ width: "150px", height: "150px", objectFit: "contain" }}
            src={profileImg}
            alt="profileImg"
          />
        )}
        <br />
        <IconButton
          color="secondary"
          component="span"
          onClick={() => go(`${to.toLowerCase()}`)}
        >
          <EditOutlinedIcon />
        </IconButton>
      </div>
    </AccordionDetails>
  </Accordion>
);
