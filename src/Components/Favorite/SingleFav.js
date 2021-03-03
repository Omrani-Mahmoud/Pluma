import React from 'react'
import { Divider, Grid, IconButton, Paper, TextField } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import {ReactComponent as DeleteIcon} from '../../Assets/Icons/svg/fi-rs-trash.svg';
import {ReactComponent as DownloadIcon} from '../../Assets/Icons/svg/fi-rs-download.svg';
import {ReactComponent as EditIcon} from '../../Assets/Icons/svg/fi-rs-pencil.svg';
import {ReactComponent as SaveIcon} from '../../Assets/Icons/svg/fi-rs-disk.svg';

import {motion} from 'framer-motion'
function SingleFav({index,content}) {
    const [edit, setedit] = React.useState(false);
    const [hoverIcons, sethoverIcons] = React.useState({delete:false,download:false,edit:false});
    const [inputValue, setinputValue] = React.useState('Favorite');


    const styleDelete={width:20,height:24,fill:hoverIcons.delete?'#6A7BFF':'#D9DDFB',marginRight:15,transition:'0.5s',cursor:'pointer'};
    const styleDonwload={width:20,height:24,fill:hoverIcons.download?'#6A7BFF':'#D9DDFB',marginRight:15,transition:'0.5s',cursor:'pointer'};
    const styleEdit={width:16,height:20,fill:hoverIcons.edit?'#6A7BFF':'#D9DDFB',marginRight:15,transition:'0.5s',cursor:'pointer',float:'right'};
    const styleSave={width:16,height:20,fill:hoverIcons.edit?'#6A7BFF':'#D9DDFB',marginRight:15,transition:'0.5s',cursor:'pointer',float:'right'};


    const _handleChange = (e)=>{
        setinputValue(e.target.value)
    }

    return (
        <Paper elevation={0} square style={{height:'33vh',marginBottom:'10px',padding:'24px',width:'48%',marginRight:'15px'}}>
            
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                <div style={{height:'22vh',overflowY:'auto'}}>
                    {
                        edit ?
                        <div> 
                        <input onChange={(e)=>_handleChange(e)} defaultValue={inputValue} style={{border:'none', outline:'none',background:'#f2f4ff',borderRadius:'5px',padding:'5px'}} />
                        <SaveIcon onClick={()=>{setedit(false);console.log(inputValue)}}  style={styleSave} onMouseEnter={()=>sethoverIcons({...hoverIcons,edit:true})} onMouseLeave={()=>sethoverIcons({...hoverIcons,edit:false})}/>
                        </div>
                        :
                        <div>
                        <span><b style={{fontSize:'18px',marginLeft:'10px',fontWeight:'bold'}}>{`Favorite`}</b></span>
                        <EditIcon onClick={()=>setedit(true)}  style={styleEdit} onMouseEnter={()=>sethoverIcons({...hoverIcons,edit:true})} onMouseLeave={()=>sethoverIcons({...hoverIcons,edit:false})}/>

                        </div>

                    }
                <Divider variant="middle" style={{marginTop:'10px',marginLeft:'-10px'}} />

                <p style={{display:'inline-block',wordWrap:'break-word',whiteSpace:'initial',overflowWrap:"break-word",padding:'10px',fontSize:'15px'}}>{content}</p>
                </div>
                <section style={{float:'right',marginRight:'-10px',paddingTop:'10px',display:'flex',justifyContent:'flex-end'}}>
                        <DownloadIcon  style={styleDonwload} onMouseEnter={()=>sethoverIcons({...hoverIcons,download:true})} onMouseLeave={()=>sethoverIcons({...hoverIcons,download:false})} />

                  
                        <DeleteIcon  style={styleDelete} onMouseEnter={()=>sethoverIcons({...hoverIcons,delete:true})} onMouseLeave={()=>sethoverIcons({...hoverIcons,delete:false})}/>
            
                </section>
            </div> 
        </Paper>
    )
}

export default SingleFav
