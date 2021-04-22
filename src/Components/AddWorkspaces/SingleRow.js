import { Badge, Divider, Grid, IconButton, TextField } from '@material-ui/core'
import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {ReactComponent as DeleteIcon} from '../../Assets/Icons/svg/fi-rs-trash.svg';
import {ReactComponent as EditIcon} from '../../Assets/Icons/svg/fi-rs-pencil.svg';
import {ReactComponent as SaveIcon} from '../../Assets/Icons/svg/fi-rs-disk.svg';
import CustomSnackbar from '../SnackBars/CustomSnackBar';
import axios from 'axios';
import {uri} from "../../Url_base";
import jwt from "jsonwebtoken";

// import SaveIcon from '@material-ui/icons/Save';
import CustomCard from '../Results/CustomCard';
import CustomBadge from './CustomBadge';
import EmptyCustomBadge from './EmptyCustomBadge';
import { userState,tokenState,workSpaceState,favoritesState } from "../../Atoms/Atoms";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from "recoil";
import {getToken} from '../../Selectors/TokenSelector'

function SingleRow({workspace}) {

    const [edit, setedit] = React.useState(false);
    const [hovred, sethovred] = React.useState({edit:false,delete:false})

    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState("");
    const authToken = useRecoilValue(getToken);
    const [_token, _setToken] = useRecoilState(tokenState);
    const [_workspaces, _setWorkspaces] = useRecoilState(workSpaceState);


    const EdithoverStyle={
        fill:!hovred.edit?'#D9DDFB':'#6A7BFF',
        transition:'0.5s',
        cursor:'pointer',
        marginRight:'15px',
        width:20,height:24
    }
    const DeletehoverStyle={
        fill:!hovred.delete?'#D9DDFB':'#6A7BFF',
        transition:'0.5s',
        cursor:'pointer',
        marginRight:'15px',
        width:20,height:24
    }


    const save_edit= ()=>{
        setedit(false);
    }

    const delete_workspace = ()=>{
        axios({
          method:'POST',
          url:`${uri.link}/delete_workspace/${workspace.id}`,
        //   data:qs.stringify(form),
          headers: {
              Authorization: 'Bearer ' + authToken
          }
        }).then(res=>{
            if(res.data){
              _setToken({token:res.data});
              _setWorkspaces(jwt.decode(res.data).workspaces)
                window.localStorage.setItem('plumaT',res.data)
                setStatus(200)
                setOpen(true)
            }
    
        })
        .catch(err=>{
            setStatus('error')
            setOpen(true)
            // console.log('error here :====>',err)
        })
    
      };
    

    return (
        <>
            
        <Grid item md={12} style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
        {
              status === 'error' &&
                <CustomSnackbar
                    setter={setOpen}
                    open={open}
                    content="Ops, Something Wrong!"
                    type="error"
                />
              }
              { 
                status == 200 && 
              <CustomSnackbar
                  setter={setOpen}
                  open={open}
                  content="Workspace has been deleted successfully!"
                  type="success"
              />
            }
               {
                    !edit?
                        <section style={{display:'flex'}}>
                            {workspace.is_active && <CustomBadge /> }
                            {!workspace.is_active && <EmptyCustomBadge /> }
                            <span style={{fontSize:'18px'}}>{workspace.name}</span>
                        </section>
                    :
                    <TextField style={{marginLeft:'45px',marginBottom:'18px'}} defaultValue={workspace.name} />

               } 
                <div>
                    {
                         !edit?
                         <EditIcon onClick={()=>setedit(true)} fontSize='small' style={EdithoverStyle} onMouseEnter={()=>sethovred({...hovred,edit:true})} onMouseLeave={()=>sethovred({...hovred,edit:false})} />
                         :
                         <SaveIcon onClick={()=>save_edit()} fontSize='small' style={{ cursor:'pointer',marginRight:'15px',fill:'#6A7BFF', width:20,height:24}} />

                    }
             
        
                    <DeleteIcon fontSize='small' onClick={delete_workspace} style={DeletehoverStyle} onMouseEnter={()=>sethovred({...hovred,delete:true})} onMouseLeave={()=>sethovred({...hovred,delete:false})}/>
             
                </div>
            

        </Grid>
        {
            !edit &&
            <Divider variant="middle" style={{marginTop:'18px',marginLeft:'40px'}}/>

        }

        </>
    )
}

export default SingleRow
