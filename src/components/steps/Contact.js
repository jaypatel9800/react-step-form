import React, { useState, useEffect } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

const Contact = ({
  email,
  setEmail,
  contactNo,
  setContactNo,
  website,
  setWebsite,
  profileImg,
  navigation
}) => {
  const { go } = navigation;
  const [condi, setCondi] = useState(false);
  const [emailVal, setEmailVal] = useState(false);
  const [websiteVal, setwebsiteVal] = useState(false);
  const [contactVal, setContactVal] = useState(false);

  useEffect(() => {
    let e_mail =
      email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ||
      email.length === 0
        ? setEmailVal(false)
        : setEmailVal(true);
    let webSite =
      website.match(
        /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
      ) || website.length === 0
        ? setwebsiteVal(false)
        : setwebsiteVal(true);
    let mobile =
      contactNo.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) || contactNo.length === 0
        ? setContactVal(false)
        : setContactVal(true);
    return e_mail, webSite, mobile;
  }, [email, contactNo, website]);

  const checkForm = (e) => {
    e.preventDefault();
    if (
      email.length &&
      contactNo.length &&
      !contactVal &&
      !emailVal &&
      !websiteVal
    ) {
      if (profileImg.length) {
        go("review");
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
      <h3>2. Contact Information</h3>
      <form>
        <TextField
          label="E-mail"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          autoComplete="off"
          fullWidth
          required
          error={emailVal}
          helperText={emailVal ? "E-mail is not valid*" : ""}
        />
        <TextField
          label="Website"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          margin="normal"
          autoComplete="off"
          fullWidth
          required
          error={websiteVal}
          helperText={websiteVal ? "Website url is not valid*" : ""}
        />
        <TextField
          label="Contact No."
          name="contactNo"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
          margin="normal"
          autoComplete="off"
          fullWidth
          required
          error={contactVal}
          helperText={contactVal ? "Contact number is not valid*" : ""}
        />
        {condi && (
          <h3 style={{ color: "red", fontSize: "13px", fontWeight: "400" }}>
            All valid fields are required*
          </h3>
        )}
        <Container style={{ textAlign: "center" }}>
          <Button
            variant="outlined"
            onClick={navigation.previous}
            color="primary"
            value="submit"
            style={{ margin: "2rem 1rem", borderRadius: "5px", width: "35%" }}
          >
            <ArrowBackRoundedIcon fontSize="large" />
          </Button>
          <Button
            onClick={checkForm}
            variant="outlined"
            color="primary"
            value="submit"
            style={{ margin: "2rem 1rem", borderRadius: "5px", width: "35%" }}
          >
            <ArrowForwardRoundedIcon fontSize="large" />
          </Button>
        </Container>
      </form>
    </Container>
  );
};

export default Contact;
