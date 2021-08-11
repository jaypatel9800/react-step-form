import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

const ProfilePicture = ({ profileImg, setProfileImg, navigation }) => {
  const [condi, setCondi] = useState(false);

  const checkForm = (e) => {
    e.preventDefault();
    if (profileImg.length) {
      setCondi(false);
      navigation.next();
    } else {
      setCondi(true);
    }
  };
  return (
    <Container maxWidth="xs">
      <h3>3. Profile Picture</h3>
      <Container style={{ textAlign: "center", margin: "2rem auto" }}>
        <Button variant="outlined" component="label" fullWidth>
          <CloudUploadOutlinedIcon fontSize="large" />
          <input
            type="file"
            hidden
            onChange={(e) =>
              setProfileImg(URL.createObjectURL(e.target.files[0]))
            }
            accept="image/*"
            multiple="false"
          />
        </Button>
      </Container>
      {condi && (
        <h3
          style={{
            color: "red",
            fontSize: "13px",
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Image is required*
        </h3>
      )}
      <Container
        style={{
          width: "200px",
          height: "200px",
          border: `1px solid gray`,
          borderRadius: `20px`,
        }}
      >
        {profileImg.length !== 0 && (
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={profileImg}
            alt="profilePic"
          />
        )}
      </Container>
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
    </Container>
  );
};

export default ProfilePicture;
