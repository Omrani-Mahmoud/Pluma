import React from 'react'
// import SaveAltIcon from '@material-ui/icons/SaveAlt';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import { Divider, Grid, IconButton, Paper } from '@material-ui/core';




import { Divider, Grid, IconButton, Paper } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import {ReactComponent as DeleteIcon} from '../../Assets/Icons/svg/fi-rs-trash.svg';
import {ReactComponent as CopyIcon} from '../../Assets/Icons/svg/fi-rs-duplicate.svg';
import {ReactComponent as HeartIcon} from '../../Assets/Icons/svg/fi-rs-bookmark.svg';
import {activeWorkspace} from '../../Selectors/WorkspaceSelector'
import {RecoilRoot,atom,selector,useRecoilState,useRecoilValue,} from "recoil";
import axios from 'axios';
import qs from 'qs';
import {uri} from "../../Url_base";
import {getToken} from '../../Selectors/TokenSelector'
import Swal from 'sweetalert2'
import { tokenState,favoritesState } from "../../Atoms/Atoms";
import jwt from 'jsonwebtoken'
import CustomSnackbar from '../SnackBars/CustomSnackBar';

function CustomCard({index,content}) {
    const currentWorkspace= useRecoilValue(activeWorkspace);
    const authToken = useRecoilValue(getToken);
    const [_token, _setToken] = useRecoilState(tokenState);
    const [_favorites, _setFavorites] = useRecoilState(favoritesState);

    const [open, setOpen] = React.useState(false);
    const [open_copy, setOpen_copy] = React.useState(false);

    const [status, setStatus] = React.useState("");
    const [status_copy, setStatus_copy] = React.useState("");

    const _addToFav = (value) =>{
        //if error on value type try to aprse it 
        const bodyy  = {content:value,w_id:currentWorkspace.id};
        axios({
            method:'POST',
            url:`${uri.link}/favorites/${value}/${currentWorkspace.id}`,
            data:qs.stringify(bodyy),
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
                _setFavorites(jwt.decode(res.data).favorites)
                window.localStorage.setItem('plumaT',res.data)
  
              }
              // setStatus('error')
            }
          
          })
    
            .catch(err=>{
              console.log('error',err);
              setStatus('error')
           
            })
      }


    const [hoverIcons, sethoverIcons] = React.useState({heart:false,download:false});

    const styleDelete={width:20,height:24,fill:hoverIcons.heart?'#6A7BFF':'#D9DDFB',marginRight:15,transition:'0.5s',cursor:'pointer'};
    const styleDonwload={width:20,height:24,fill:hoverIcons.download?'#6A7BFF':'#D9DDFB',marginRight:15,transition:'0.5s',cursor:'pointer'};


    const beautify = ()=>{
        let display = [];
       let res =  content.split(' \n ');
       res.map(elem=>{
            display.push(<p style={{padding:'0px 10px 0px 10px',fontSize:'15px'}}>{elem.replace('text: ','')}</p>)
       })
       return display
    }
    const copy_  = () => {
      navigator.clipboard.writeText(content).then(()=>{
          setStatus_copy(200);
          setOpen_copy(true)
      },()=>{
        setStatus_copy('error')
        setOpen_copy(true)
      })
  }
    return (
       
         <Paper elevation={0} square style={{marginBottom:'10px',padding:'24px',width:'100%',marginRight:'15px',borderRadius:'18px'}}>
            
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
                  content="This text has been added to your favorite list !"
                  type="success"
              />
            }

        {
              status_copy === 'error' && 
                <CustomSnackbar
                    setter={setOpen}
                    open={open}
                    content="Ops, Something Wrong!"
                    type="error"
                />
            }
            {
                status_copy === 200 && 
              <CustomSnackbar
                  setter={setOpen}
                  open={open}
                  content="Text copied to clipboard !"
                  type="info"
              />
            }


         <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
             <div>
             <span><b style={{fontSize:'18px',marginLeft:'10px',fontWeight:'bold'}}>{`Result ${index}`}</b></span>
             <Divider variant="middle" style={{marginTop:'10px',marginLeft:'-10px'}} />

             {/* <p  style={{height:'16vh',overflowY:'auto',display:'inline-block',wordWrap:'break-word',whiteSpace:'initial',overflowWrap:"break-word",padding:'10px',fontSize:'15px'}}>
             {   beautify(content)}
            </p> */}
            <div>
            {
                beautify()
            }
            </div>
            
             </div>
             <section style={{float:'right',marginRight:'-10px',paddingTop:'10px',display:'flex',justifyContent:'flex-end'}}>
                     <HeartIcon onClick={()=>_addToFav(beautify()[0].props.children)} style={styleDelete} onMouseEnter={()=>sethoverIcons({...hoverIcons,heart:true})} onMouseLeave={()=>sethoverIcons({...hoverIcons,heart:false})}/>
                     <CopyIcon onClick={copy_}  style={styleDonwload} onMouseEnter={()=>sethoverIcons({...hoverIcons,download:true})} onMouseLeave={()=>sethoverIcons({...hoverIcons,download:false})} />

         
             </section>
         </div> 
     </Paper>

    )
}

export default CustomCard
