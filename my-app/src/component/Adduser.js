import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { adduser } from "../service/api";

import { useNavigate } from "react-router-dom";

const Conatiner = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
`;

const Subcontainer = styled(FormControl)`
  margin-top: 20px;
`;

const defaultvalue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

function Adduser() {
  const [user, setUser] = useState(defaultvalue);

  const savedata = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigaet = useNavigate();
  const adduserdetails = async () => {
    await adduser(user);
    alert("User added sucessfully")
    navigaet("/alluser");
  };

  return (
    <Conatiner>
      <Typography variant="h2">Add User</Typography>
      <Subcontainer>
        <InputLabel>Name</InputLabel>
        <Input onChange={savedata} name="name" />
      </Subcontainer>
      <Subcontainer>
        <InputLabel>Username</InputLabel>
        <Input onChange={savedata} name="username" />
      </Subcontainer>
      <Subcontainer>
        <InputLabel>Email</InputLabel>
        <Input onChange={savedata} name="email" />
      </Subcontainer>
      <Subcontainer>
        <InputLabel>Phone</InputLabel>
        <Input onChange={savedata} name="phone" />
      </Subcontainer>

      <Subcontainer>
        <Button variant="contained" onClick={adduserdetails}>
          Add User
        </Button>
      </Subcontainer>
    </Conatiner>
  );
}

export default Adduser;
