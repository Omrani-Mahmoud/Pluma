import React from 'react'
import Profile from './Profile'
import axios from 'axios'
import useDecodeToken from '../../Hooks/useDecodeToken';
import { decodeToken } from '../../Selectors/TokenSelector';
import {getToken} from '../../Selectors/TokenSelector'
import {RecoilRoot,atom,selector,useRecoilState,useRecoilValue,} from "recoil";
import { tokenState,userState,membersState } from "../../Atoms/Atoms";
import qs from 'qs';
import {uri} from "../../Url_base";
import jwt from 'jsonwebtoken'

function ProfileContainer() {
  const decodedToken = useDecodeToken();
  const authToken = useRecoilValue(getToken);
  const [_token, _setToken] = useRecoilState(tokenState);
  const [_user, _setUser] = useRecoilState(userState);
  const [_members, _setMembers] = useRecoilState(membersState);



  const update_account_info = (form,cb)=>{
    ///${value}/${currentWorkspace.id}
    axios({
      method:'POST',
      url:`${uri.link}/update`,
      data:qs.stringify(form),
      headers: {
          Authorization: 'Bearer ' + authToken
      }
    }).then(res=>{
        if(res.data){
          let decoded = jwt.decode(res.data);
          console.log('data here ',decoded)
          _setToken({token:res.data});
          window.localStorage.setItem('plumaT',res.data);
          _setUser({first_name:decoded.first_name,last_name:decoded.last_name,email:decoded.email})
          cb(200)
        }
        else{
          cb('error')
        }

    })
    .catch(err=>{
      cb('error')
    })

  };

  const update_password = (form,cb)=>{
    ///${value}/${currentWorkspace.id}
    axios({
      method:'POST',
      url:`${uri.link}/update_password`,
      data:qs.stringify(form),
      headers: {
          Authorization: 'Bearer ' + authToken
      }
    }).then(res=>{
        if(res.data['wrong_password']){
            cb('error')
          }
            else{
          _setToken({token:res.data});
          window.localStorage.setItem('plumaT',res.data);
          cb(200)
        }
        

    })
    .catch(err=>{
      cb('error')
    })

  };



  const addMember = (email,cb)=>{
    axios({
      method:'POST',
      url:`${uri.link}/add_member`,
      data:qs.stringify({email:email}),
      headers: {
          Authorization: 'Bearer ' + authToken
      }
    }).then(res=>{
        if(res.data.message)
        cb('error')
        else 
        if(res.data['new member email']){
          cb(200);
        }
        // {
        //   let decoded = jwt.decode(res.data);
        //   _setToken({token:res.data});
        //   window.localStorage.setItem('plumaT',res.data);
        //   _setMembers(decoded.members)
        //   cb(200)
        // }

    })
    .catch(err=>{
      cb('error')
    })

  };




    return (
      <Profile  update_password={update_password} addMember__={addMember} update__={update_account_info} first_name={decodedToken?.first_name} last_name={decodedToken?.last_name} email={decodeToken?.email} />
    )
}

export default ProfileContainer
