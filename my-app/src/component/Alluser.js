import React, { useEffect, useState } from "react"
import {Button, Table, TableBody, TableCell, TableHead, TableRow}from "@mui/material"

import { alluser, deleteusers } from "../service/api";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Styledtable = styled(Table)`
  width: 90%;
  margin: 30px auto 0 auto;
`;
const Thead = styled(TableRow)`
  background: black;
  & > th {
    color: white;
    font-size:20px;
  }
  
`;

const Tbody=styled(TableRow)`
 & > td{
    font-size:20px;
 }
`
function Alluser(){

    const [users,setAlluser]=useState([])
    useEffect(()=>{
        getalluser()

    },[])

    const getalluser=async ()=>{
       let res= await alluser();
       console.log(res.data)
      setAlluser(res.data)


    }

    const deleteuser=async(id)=>{
        await deleteusers(id)
        alert("Did you want delete the user ");
        getalluser()


    }



    return (
      <Styledtable>
        <TableHead>
          <Thead>
            <TableCell>No.</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Action</TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <Tbody key={user._id}>
              <TableCell>{index+1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/edituser/${user._id}`}
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteuser(user._id)}
                >
                  delete
                </Button>
              </TableCell>
            </Tbody>
          ))}
        </TableBody>
      </Styledtable>
    );

}
export default Alluser
