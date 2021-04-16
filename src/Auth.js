import Swal from 'sweetalert2'
import {uri} from "./Url_base";
import axios from "axios";
import jwt from 'jsonwebtoken';
import qs from 'qs';
class Auth{
    constructor(){
        this.authenticated=false
    }
    
    login(inputsValue,setter,status,open,seterror_msg,cb){
      axios({
        method:'POST',
        url:`${uri.link}/login`,
        data:qs.stringify(inputsValue),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      })
      
      .then(res=>{
      
        if(res.status===200)
        {
          setter(false)
          console.log('here token',res.data.access_token)
            if(res.data && res.data.access_token){
                this.authenticated=true;
                cb(res.data.access_token)
            }
            else{
              setter(false)
              seterror_msg(res.data)
              open(true);
              status("error");
            }
          }
       
        })

        .catch(err=>{
          setter(false)
          console.log('error',err);
          open(true);
          status("error");
          // Swal.fire({
          //   icon: 'error',
          //   title: 'Oops...',
          //   text: `${err.response.data.message && err.response.status===401 ? err.response.data.message:'Something went wrong!'}`,
          // })
       
        })
   
    }



    logout(his){
      axios({ method: 'post',
              url:`${uri.link}/logout`,
              headers: { 'auth-token': window.localStorage.getItem('plumaT') } })
          .then(res=>{

            window.localStorage.setItem('erpT','expired');
            window.location.replace('/')
              
      })
          
          }



    
    isAuthenticated(){
    let token =window.localStorage.getItem('plumaT');
    let user ={};
    let value = false;
    if(token && token!=='expired'){
      user = jwt.decode(token);
    
   
    var current_time = Date.now() / 1000;
    if(user && Object.keys(user).length>0){
      console.log('user here :::::>',user)
      if ( user.exp < current_time) 
          value = false;
      else
        value = true
    }
    else{
      value = false
    }
  }
  else{
    value = false
  }
    
    return value
      
      // await axios.get(uri.link+"user/me",{

      //       headers:{
      //         'Authorization':`Bearer ${window.localStorage.getItem("token")}`}
      //       })
      //         .then(res=>{
         
      //        window.localStorage.setItem("erpT",'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEwMDU3NzY0LCJqdGkiOiI0MWQ5N2QzNmI2NjE0YmM3OTk2ZDg3ODcxOTc1MmY2NSIsInVzZXJuYW1lIjoicm9vdCJ9.obR0uJ2owtJFypNwh6qSHyzEnPFgZSlKEkOi9KGTPTA')
                
      //         })
      //         .catch(err=>{
      //           window.localStorage.setItem("erpT",'')
      //         })


    }


}

export default new Auth()