import axios from "axios"


let URL = "http://localhost:4000";

export const adduser=async (data)=>{
    try{
       return  await axios.post(`${URL}/add`,data)

    }catch(error){
        console.log(error)
    }
}

export const alluser=async()=>{
    try{
        return await axios.get(`${URL}/all`)

    }catch(error){
        console.log(error)
    }
}

export const getuser=async (id)=>{
    try{
        return await axios.get(`${URL}/${id}`)

    }catch(error){
        console.log(error)
    }
}

export const edituser=async(user,id)=>{
    try{
        return await axios.put(`${URL}/${id}`,user);

    }catch(error){
        console.log(error);
    }
}

export const deleteusers = async ( id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log(error);
  }
};