import React, { useState } from "react";
import { useStep } from "react-hooks-helper";
import { Personal } from "./steps/Personal";
import Contact from "./steps/Contact";
import ProfilePicture from "./steps/ProfilePicture";
import { Review } from "./steps/Review";
import Submit from "./steps/Submit";

const steps = [
  { id: "personal" },
  { id: "contact" },
  { id: "profilepicture" },
  { id: "review" },
  { id: "submit" }
];

const MultiStepForm = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [website, setWebsite] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const { step, navigation } = useStep({
    steps,
    initialStep: 0
  });
  const props = {
    firstName,
    setFirstName,
    middleName,
    setMiddleName,
    lastName,
    setLastName,
    email,
    setEmail,
    contactNo,
    setContactNo,
    website,
    setWebsite,
    navigation,
    profileImg,
    setProfileImg
  };

  switch (step.id) {
    case "personal":
      return <Personal {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "profilepicture":
      return <ProfilePicture {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return <Personal {...props} />;
  }
};

export default MultiStepForm;
