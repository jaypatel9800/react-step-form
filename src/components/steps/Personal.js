import React, { useEffect, useState } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

export const Personal = ({
  firstName,
  setFirstName,
  middleName,
  setMiddleName,
  lastName,
  setLastName,
  email,
  website,
  contactNo,
  profileImg,
  navigation
}) => {
  const { go } = navigation;
  const [condi, setCondi] = useState(false);
  const [firstNameVal, setFirstNameVal] = useState(false);
  const [middleNameVal, setMiddleNameVal] = useState(false);
  const [lastNameVal, setLastNameVal] = useState(false);

  useEffect(() => {
    let first =
      firstName.match(/^[a-zA-Z]+$/) || firstName.length === 0
        ? setFirstNameVal(false)
        : setFirstNameVal(true);
    let middle =
      middleName.match(/^[a-zA-Z]+$/) || middleName.length === 0
        ? setMiddleNameVal(false)
        : setMiddleNameVal(true);
    let last =
      lastName.match(/^[a-zA-Z]+$/) || lastName.length === 0
        ? setLastNameVal(false)
        : setLastNameVal(true);
    return first, middle, last;
  }, [firstName, middleName, lastName]);

  const checkForm = (e) => {
    e.preventDefault();
    if (
      !firstNameVal &&
      !middleNameVal &&
      !lastNameVal &&
      firstName.length &&
      middleName.length &&
      lastName.length
    ) {
      if (email.length && contactNo.length && website.length) {
        if (profileImg.length) {
          go("review");
        } else {
          go("profilepicture");
        }
      } else {
        setCondi(false);
        navigation.next();
      }
    } else {
      setCondi(true);
    }
  };
  return (
    <Container maxWidth="xs">
      <h3>1. Personal Information</h3>
      <form>
        <TextField
          label="First Name"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          margin="normal"
          autoComplete="off"
          fullWidth
          required
          error={firstNameVal}
          helperText={firstNameVal ? "First name is not valid*" : ""}
        />
        <TextField
          label="Middle Name"
          name="middleName"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
          margin="normal"
          autoComplete="off"
          fullWidth
          required
          error={middleNameVal}
          helperText={middleNameVal ? "Middle name is not valid*" : ""}
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          margin="normal"
          autoComplete="off"
          fullWidth
          error={lastNameVal}
          helperText={lastNameVal ? "Last name is not valid*" : ""}
          required
        />
        {condi && (
          <h3 style={{ color: "red", fontSize: "13px", fontWeight: "400" }}>
            All valid fields are required*
          </h3>
        )}
        <Button
          variant="outlined"
          fullWidth
          color="primary"
          type="submit"
          onClick={checkForm}
          style={{ marginTop: "2rem", borderRadius: "5px" }}
        >
          <ArrowForwardRoundedIcon fontSize="large" />
        </Button>
      </form>
    </Container>
  );
};
