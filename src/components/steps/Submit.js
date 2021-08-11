import React from "react";
import { Container, Button } from "@material-ui/core";
import PostAddRoundedIcon from "@material-ui/icons/PostAddRounded";

const Submit = ({
  navigation,
  setFirstName,
  setMiddleName,
  setLastName,
  setEmail,
  setContactNo,
  setWebsite,
  setProfileImg,
}) => {
  const { go } = navigation;

  const changeItems = () => {
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setEmail("");
    setContactNo("");
    setWebsite("");
    setProfileImg("");
    go("personal");
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h3 style={{ letterSpacing: "0.5px" }}>
        Thank you for sharing your valuable information with us.
      </h3>
      <p style={{ letterSpacing: "0.3px" }}>We will reach you very soon..</p>
      <Button variant="outlined" color="primary" onClick={changeItems}>
        <PostAddRoundedIcon fontSize="large" />
      </Button>
    </Container>
  );
};

export default Submit;
