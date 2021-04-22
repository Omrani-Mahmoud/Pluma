import React from 'react'
import { Divider, Grid, IconButton, Paper, TextField } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import {ReactComponent as DeleteIcon} from '../../Assets/Icons/svg/fi-rs-trash.svg';
import {ReactComponent as CopyIcon} from '../../Assets/Icons/svg/fi-rs-duplicate.svg';
import {ReactComponent as EditIcon} from '../../Assets/Icons/svg/fi-rs-pencil.svg';
import {ReactComponent as SaveIcon} from '../../Assets/Icons/svg/fi-rs-disk.svg';
import axios from 'axios';
import {uri} from "../../Url_base";
import jwt from "jsonwebtoken";
import { userState,tokenState,workSpaceState,favoritesState } from "../../Atoms/Atoms";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from "recoil";
import {motion} from 'framer-motion'
import CustomSnackbar from '../SnackBars/CustomSnackBar';
import { getToken } from '../../Selectors/TokenSelector';
function SingleFav({index,content,id}) {

    const authToken = useRecoilValue(getToken);
    const [_token, _setToken] = useRecoilState(tokenState);
    const [_favorites, _setFavorites] = useRecoilState(favoritesState);



    const [edit, setedit] = React.useState(false);
    const [hoverIcons, sethoverIcons] = React.useState({delete:false,download:false,edit:false});
    const [inputValue, setinputValue] = React.useState(`Favorite ${index+1}`);
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState("");

    const [open_delete, setOpen_delete] = React.useState(false);
    const [status_delete, setStatus_delete] = React.useState("");


    const styleDelete={width:20,height:24,fill:hoverIcons.delete?'#6A7BFF':'#D9DDFB',marginRight:15,transition:'0.5s',cursor:'pointer'};
    const styleDonwload={width:20,height:24,fill:hoverIcons.download?'#6A7BFF':'#D9DDFB',marginRight:15,transition:'0.5s',cursor:'pointer'};
    const styleEdit={width:16,height:20,fill:hoverIcons.edit?'#6A7BFF':'#D9DDFB',marginRight:15,transition:'0.5s',cursor:'pointer',float:'right'};
    const styleSave={width:16,height:20,fill:hoverIcons.edit?'#6A7BFF':'#D9DDFB',marginRight:15,transition:'0.5s',cursor:'pointer',float:'right'};


    const _handleChange = (e)=>{
        setinputValue(e.target.value)
    }

    const copy_  = () => {
        navigator.clipboard.writeText(content).then(()=>{
            setStatus(200);
            setOpen(true)
        },()=>{
            setOpen(true)
            setStatus('error')
        })
    }


    const delete_fav = ()=>{
        axios({
          method:'POST',
          url:`${uri.link}/delete_favorite/${id}`,
        //   data:qs.stringify(form),
          headers: {
              Authorization: 'Bearer ' + authToken
          }
        }).then(res=>{
            if(res.data){
              _setToken({token:res.data});
              _setFavorites(jwt.decode(res.data).favorites)
                window.localStorage.setItem('plumaT',res.data)
                setStatus_delete(200)
                setOpen_delete(true)
            }
    
        })
        .catch(err=>{
            setStatus_delete('error')
            setOpen_delete(true)
            // console.log('error here :====>',err)
        })
    
      };

    return (
        <Paper elevation={0} square style={{marginBottom:'10px',padding:'24px',width:'48%',marginRight:'15px',borderRadius:'18px'}}>
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
                status === 200 && 
              <CustomSnackbar
                  setter={setOpen}
                  open={open}
                  content="Text copied to clipboard !"
                  type="info"
              />
            }

                {
                status_delete === 'error' &&
                <CustomSnackbar
                    setter={setOpen_delete}
                    open={open_delete}
                    content="Ops, Something Wrong!"
                    type="error"
                />
              }
              { 
                status_delete == 200 && 
              <CustomSnackbar
                  setter={setOpen_delete}
                  open={open_delete}
                  content="Your favorite has been updated successfully!"
                  type="success"
              />
            }
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                <div>
                    {
                        edit ?
                        <div> 
                        <input onChange={(e)=>_handleChange(e)} defaultValue={inputValue} style={{border:'none', outline:'none',background:'#f2f4ff',borderRadius:'5px',padding:'5px'}} />
                        <SaveIcon onClick={()=>{setedit(false);console.log(inputValue)}}  style={styleSave} onMouseEnter={()=>sethoverIcons({...hoverIcons,edit:true})} onMouseLeave={()=>sethoverIcons({...hoverIcons,edit:false})}/>
                        </div>
                        :
                        <div>
                        <span><b style={{fontSize:'18px',marginLeft:'10px',fontWeight:'bold'}}>{`Favorite ${index+1}`}</b></span>
                        <EditIcon onClick={()=>setedit(true)}  style={styleEdit} onMouseEnter={()=>sethoverIcons({...hoverIcons,edit:true})} onMouseLeave={()=>sethoverIcons({...hoverIcons,edit:false})}/>

                        </div>

                    }
                <Divider variant="middle" style={{marginTop:'10px',marginLeft:'-10px'}} />

                <p style={{display:'inline-block',wordWrap:'break-word',whiteSpace:'initial',overflowWrap:"break-word",padding:'10px',fontSize:'15px'}}>{content}</p>
                </div>
                <section style={{float:'right',marginRight:'-10px',paddingTop:'10px',display:'flex',justifyContent:'flex-end'}}>
                        <CopyIcon onClick={copy_}  style={styleDonwload} onMouseEnter={()=>sethoverIcons({...hoverIcons,download:true})} onMouseLeave={()=>sethoverIcons({...hoverIcons,download:false})} />

                  
                        <DeleteIcon  onClick={delete_fav} style={styleDelete} onMouseEnter={()=>sethoverIcons({...hoverIcons,delete:true})} onMouseLeave={()=>sethoverIcons({...hoverIcons,delete:false})}/>
            
                </section>
            </div> 
        </Paper>
    )
}

export default SingleFav
