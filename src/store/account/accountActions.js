import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { makeRequest } from "../../helpers/consts";

export const registerAccount = createAsyncThunk(
    'account/registerAccount',
    async (body)=>{
        console.log(body)
        const data = await axios.post(`http://34.89.235.149/api/v1/account/register/`, body).
        catch(err => {
            console.log(err.response)
        });
        console.log(data.data)
    }
)

// export const loginAcoount = createAsyncThunk(
//     'account/loginAccount',
//     async({user, navigate}) =>{
//         const {data} = await axios.post(`${makeRequest}/login/`, user, {
//             withCredentials: true,
//           });
//         return ({data, navigate})
//     }
// )