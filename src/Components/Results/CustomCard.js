import React from 'react'
// import SaveAltIcon from '@material-ui/icons/SaveAlt';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import { Divider, Grid, IconButton, Paper } from '@material-ui/core';




import { Divider, Grid, IconButton, Paper } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import {ReactComponent as DeleteIcon} from '../../Assets/Icons/svg/fi-rs-trash.svg';
import {ReactComponent as DownloadIcon} from '../../Assets/Icons/svg/fi-rs-download.svg';
import {ReactComponent as HeartIcon} from '../../Assets/Icons/svg/fi-rs-bookmark.svg';

function CustomCard({index,content}) {
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

    return (
        // <Paper elevation={0} square style={{height:'190px',marginBottom:'10px',padding:'10px'}}>
            
        //     <span><b style={{fontSize:'18px'}}>{`Result${index}`}</b></span>
        //     <Grid item md ={12} style={{overflowY:'auto',height:'100px'}}>
        //     <p style={{display:'inline-block',wordWrap:'break-word',whiteSpace:'initial',overflowWrap:"break-word"}}>{content}</p>
        //     </Grid>
        //     <Divider variant="middle" />
        //     <section style={{float:'right',padding:'10px'}}>
        //         <IconButton size='small' aria-label="upload picture" component="span" style={{marginRight:'10px'}}>
        //             <SaveAltIcon fontSize="small" style={{color:'#6A7BFF'}}/>
        //         </IconButton>
        //         <IconButton size='small'  aria-label="upload picture" component="span">
        //             <FavoriteIcon fontSize="small" style={{color:'#6A7BFF'}} />
        //         </IconButton>
        //     </section>
        // </Paper>
         <Paper elevation={0} square style={{height:'33vh',marginBottom:'10px',padding:'24px',width:'100%',marginRight:'15px'}}>
            
         <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
             <div style={{height:'23vh'}}>
             <span><b style={{fontSize:'18px',marginLeft:'10px',fontWeight:'bold'}}>{`Result ${index}`}</b></span>
             <Divider variant="middle" style={{marginTop:'10px',marginLeft:'-10px'}} />

             {/* <p  style={{height:'16vh',overflowY:'auto',display:'inline-block',wordWrap:'break-word',whiteSpace:'initial',overflowWrap:"break-word",padding:'10px',fontSize:'15px'}}>
             {   beautify(content)}
            </p> */}
            <div style={{height:'17vh',overflowY:'auto'}}>
            {
                beautify()
            }
            </div>
            
             </div>
             <section style={{float:'right',marginRight:'-10px',paddingTop:'10px',display:'flex',justifyContent:'flex-end'}}>
                     <DownloadIcon  style={styleDonwload} onMouseEnter={()=>sethoverIcons({...hoverIcons,download:true})} onMouseLeave={()=>sethoverIcons({...hoverIcons,download:false})} />

               
                     <HeartIcon  style={styleDelete} onMouseEnter={()=>sethoverIcons({...hoverIcons,heart:true})} onMouseLeave={()=>sethoverIcons({...hoverIcons,heart:false})}/>
         
             </section>
         </div> 
     </Paper>

    )
}

export default CustomCard
