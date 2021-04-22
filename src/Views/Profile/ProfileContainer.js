import React from 'react'
import Profile from './Profile'
import axios from 'axios'
import useDecodeToken from '../../Hooks/useDecodeToken';
import { decodeToken } from '../../Selectors/TokenSelector';
import {getToken} from '../../Selectors/TokenSelector'
import {RecoilRoot,atom,selector,useRecoilState,useRecoilValue,} from "recoil";
import { tokenState,userState } from "../../Atoms/Atoms";
import qs from 'qs';
import {uri} from "../../Url_base";
import jwt from 'jsonwebtoken'

function ProfileContainer() {
  const decodedToken = useDecodeToken();
  const authToken = useRecoilValue(getToken);
  const [_token, _setToken] = useRecoilState(tokenState);
  const [_user, _setUser] = useRecoilState(userState);



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
          _setToken({token:res.data});
          window.localStorage.setItem('plumaT',res.data);
          _setUser({first_name:decoded.first_name,last_name:decoded.last_name,email:decoded.email})

          cb(200)
        }

    })
    .catch(err=>{
      cb('error')
    })

  };

    return (
      <Profile update__={update_account_info} first_name={decodedToken?.first_name} last_name={decodedToken?.last_name} email={decodeToken?.email} />
    )
}

export default ProfileContainer
