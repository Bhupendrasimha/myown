import { handleError } from '../../utils/logger/errorHandler';
import UserApi from '../../services/api/login';
import * as UserActionCreators from './actionCreator';
import { toast } from 'react-toastify';
import axios from "axios"

export const postArticle = (
  payload
) => async (dispatch) => {
  try {
    console.log(payload,"payload")
    const response = await UserApi.postArticles(payload);
    console.log(response)
    if (response?.success) {
      console.log("Success", response?.text);
      dispatch(UserActionCreators.setArticle(response));
    }
    else {
      toast.error(response?.error_message);
    }
    return response;
  } catch (err) {
    handleError(err);
  }
};

// export const verifyOtp = (
//   payload
// ) => async (dispatch) => {
//   try {
    
//     const response = await UserApi.verifyOtp(payload);
//     if (response && !response?.error_message) {
//       console.log("Success", response);
//       dispatch(UserActionCreators.setUserDetails(response));
//     }
//     else {
//       toast.error(response?.error_message);
//     }
//     return response;
//   } catch (err) {
//     handleError(err);
//   }
// };

// export const resetUser = (payload) => async (dispatch) => {
//   try {
//     dispatch(UserActionCreators.resetUser());
//   }
//   catch (err) {

//   }
// }
const header={
  "Content-Type":"application/json",
  "Authorization":"JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNjMzNmE2OTMtODAyYS00NmRmLTk5N2UtOTdmN2M5ZWU1YWVhIiwidXNlcm5hbWUiOiI2MzM2YTY5MzgwMmE0NmRmOTk3ZTk3ZjdjOWVlNWFlYSIsImV4cCI6MTYyMjU1MjczNSwiZW1haWwiOiJzaWRkaGFudEBncmFwcHVzLmNvbSIsImRldmljZV9pZCI6bnVsbCwiZGV2aWNlX3R5cGUiOiJ3ZWIiLCJkZXZpY2VfdG9rZW4iOiIifQ.uwRBGKjBxIUt_7scX6O-AKOrRuZErnBtnwi_7el5Evs"
  
}
export const postData=(payload)=>async(dispatch)=>{
try{
  axios.post('http://52.74.197.134/api/v1/articles/',payload,{
    headers:header
  }).then((response)=>   dispatch(UserActionCreators.setArticle(response)))
}
catch (err){
console.log(err)
}
}