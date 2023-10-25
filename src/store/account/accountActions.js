import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { makeRequest } from "../../helpers/consts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const registerAccount = createAsyncThunk(
    'account/registerAccount',
    async (body)=>{
        // const showToastMessage = () => {
        //     toast.success('', {
        //         position: toast.POSITION.TOP_RIGHT
        //     });
        // };
        try{
            const res = await axios.post(`http://34.89.235.149/api/v1/account/register/`, body);
            if(res.status === 201){
                alert('You have successfully registered. An activation email has been sent to you')
            }
        }
        catch(err){
            alert("This user already exists");
        }
        
        
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