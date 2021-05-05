//import {useSelector} from 'react-redux'
import { Api } from '../config/request';

//console.log(token.auth_token, "login")
export default {
  login(payload) {
    console.log(JSON.stringify(payload))
    return Api.post(`/auth/admin/signin/`, payload);
    /*return {
      "success": true,
      "text": "Your 6 digit OTP is 340421"
    }*/
  },
 
  verifyOtp(payload) {
    return Api.post(`/auth/admin/verify/`, payload)
  //   return {
  //     "id": "a1920436-3862-420f-b393-7efa8f10e6a6",
  //     "user": {
  //       "id": "a1920436-3862-420f-b393-7efa8f10e6a6",
  //       "user_type": 1,
  //       "phone_no": "+91-8826680646",
  //       "username": "a19204363862420fb3937efa8f10e6a6",
  //       "is_superuser": true,
  //       "first_name": "siddhant",
  //       "last_name": "sachdeva",
  //       "is_staff": true,
  //       "is_active": true,
  //       "created_at": "2021-04-22T09:30:32.192536Z",
  //       "updated_at": "2021-04-22T09:30:32.192552Z",
  //       "email": "siddhant@grappus.com",
  //       "is_email_verified": true,
  //       "is_phone_verified": true
  //     },
  //     "created_at": "2021-04-22T09:30:53.947856Z",
  //     "updated_at": "2021-04-22T09:30:53.947921Z",
  //     "created_by": null,
  //     "auth_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYTE5MjA0MzYtMzg2Mi00MjBmLWIzOTMtN2VmYThmMTBlNmE2IiwidXNlcm5hbWUiOiJhMTkyMDQzNjM4NjI0MjBmYjM5MzdlZmE4ZjEwZTZhNiIsImV4cCI6MTYyMTY3NjI4MiwiZW1haWwiOiJzaWRkaGFudEBncmFwcHVzLmNvbSIsImRldmljZV9pZCI6bnVsbCwiZGV2aWNlX3R5cGUiOiJ3ZWIiLCJkZXZpY2VfdG9rZW4iOiIifQ.CVZApHli9klskUEgDz4zpzzMor20t_pSJnf2evig-1c"
  //   }
   },
   
postArticles(payload) {
  return Api.post(`/articles/`,payload)
}

}

