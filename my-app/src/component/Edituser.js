import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import {  edituser,getuser } from "../service/api";

import { useNavigate, useParams } from "react-router-dom";

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

function Edituser() {
  const [user, setUser] = useState(defaultvalue);

  const savedata = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const {id}=useParams()

  useEffect(()=>{

    loaduserdetails();
  },[])

  const loaduserdetails=async ()=>{
          const res=  await getuser(id)
          setUser(res.data)
          

  }


  const navigaet = useNavigate();
  const edituserdetails = async () => {
    await edituser(user,id);
    alert("User update Sucessfully ");
    navigaet("/alluser");
  };

  return (
    <Conatiner>
      <Typography variant="h2">Edit User</Typography>
      <Subcontainer>
        <InputLabel>Name</InputLabel>
        <Input onChange={savedata} name="name" value={user.name}/>
      </Subcontainer>
      <Subcontainer>
        <InputLabel>Username</InputLabel>
        <Input onChange={savedata} name="username"value={user.username} />
      </Subcontainer>
      <Subcontainer>
        <InputLabel>Email</InputLabel>
        <Input onChange={savedata} name="email" value={user.email} />
      </Subcontainer>
      <Subcontainer>
        <InputLabel>Phone</InputLabel>
        <Input onChange={savedata} name="phone" value={user.phone} />
      </Subcontainer>

      <Subcontainer>
        <Button variant="contained" onClick={edituserdetails}>
          Edit User
        </Button>
      </Subcontainer>
    </Conatiner>
  );
}

export default Edituser;
