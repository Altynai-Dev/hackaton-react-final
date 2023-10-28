import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerAccount = createAsyncThunk(
    'account/registerAccount',
    async ({formValues, navigate})=>{
        try{
            const accountData = new FormData();
            accountData.append('email', formValues.email);
            accountData.append('password', formValues.password);
            accountData.append('password2', formValues.password2);
            const res = await axios.post(`http://34.89.235.149/api/v1/account/register/`, accountData);
            if(res.status === 201){
                alert('You have successfully registered. An activation email has been sent to you')
            }
            return {navigate};
        }
        catch(err){
            alert("This user already exists");
        }
        
        
    }
)

export const loginAccount = createAsyncThunk(
    'account/loginAccount',
    async({user, navigate}) =>{
        const accountData = new FormData();
        accountData.append('email', user.email);
        accountData.append('password', user.password);
        const {data} = await axios.post('http://34.89.235.149/api/v1/account/login/', accountData);
        console.log(data)
        return { data, navigate, user: user.email };
    }
)