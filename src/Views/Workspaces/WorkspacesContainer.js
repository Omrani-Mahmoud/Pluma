import React from 'react'
import Workspaces from './Workspaces'
import axios from 'axios'
import qs from 'qs';
import {uri} from "../../Url_base";
import {getToken} from '../../Selectors/TokenSelector'
import {useRecoilState,useRecoilValue,} from "recoil";
import { tokenState,workSpaceState } from "../../Atoms/Atoms";
import jwt from 'jsonwebtoken'
import CustomSnackbar from '../../Components/SnackBars/CustomSnackBar';

function WorkspacesContainer() {
    const authToken = useRecoilValue(getToken);
    const [_token, _setToken] = useRecoilState(tokenState);
    const [_workspaces, _setWorkspaces] = useRecoilState(workSpaceState);

    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState("");


  const _addWorkspace = (name) =>{
    axios({
        method:'POST',
        url:`${uri.link}/workspace`,
        data:qs.stringify({name:name}),
        headers: {
            Authorization: 'Bearer ' + authToken
        }
      })
      
      .then(res=>{
        setOpen(true)
        if(res.status===200)
        {
          if(res.data){
              setStatus(200)
              _setToken({token:res.data});
              _setWorkspaces(jwt.decode(res.data).workspaces)
              window.localStorage.setItem('plumaT',res.data)

            }
     
        }})

        .catch(err=>{
          console.log('error',err);
          setStatus('error')
       
        })
  }


    return (
      <>
        <Workspaces addWorkspace={_addWorkspace} />
        {
              status === 'error' ?
                <CustomSnackbar
                    setter={setOpen}
                    open={open}
                    content="Ops, Something Wrong!"
                    type="error"
                />
              :
              <CustomSnackbar
                  setter={setOpen}
                  open={open}
                  content="Workspace has been added successfully !"
                  type="success"
              />
            }
      </>
    )
}

export default WorkspacesContainer
