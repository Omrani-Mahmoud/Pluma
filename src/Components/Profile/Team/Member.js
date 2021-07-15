import { Divider, Grid } from '@material-ui/core'
import React from 'react'
import {ReactComponent as DeleteIcon} from '../../../Assets/Icons/svg/fi-rs-trash.svg';
import IconButton from '@material-ui/core/IconButton';

function Member({account,active}) {
    const styleDelete={width:9.5,height:10.2,fill:'#6A7BFF',marginRight:15,cursor:'pointer'};

    return (
       <Grid item md={4} xs={12} style={{padding:'10px'}} >
            <span style={{color:'#202020',fontSize:'15px'}}>{account.first_name} {account.last_name}</span>
            <section style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <span style={{color:'#C4C4C4',fontSize:'15px'}}>{account.email}</span>
                {
                    active ?
                    account.type==='admin'?
                    <span style={{borderRadius:'2px',textTransform:'capitalize',color:'white',fontSize:'10px',background:'#6A7BFF',width:'65px',height:'19px',display:'flex',alignItems:'center',justifyContent:'center'}}>{account.type}</span>
                    :
                    <span style={{borderRadius:'2px',textTransform:'capitalize',color:'#6A7BFF',fontSize:'10px',background:'#EBEDFC',width:'82px',height:'19px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                           <DeleteIcon style={styleDelete} fontSize="inherit" />
                           {account.type}
                    </span>
                    :
                    <span style={{border:'2px solid rgb(254,236,180)',borderRadius:'2px',textTransform:'capitalize',color:'#202020',fontWeight:'bold',fontSize:'10px',background:'rgb(255,251,231)',width:'65px',height:'19px',display:'flex',alignItems:'center',justifyContent:'center'}}>Pending</span>

                }
            </section>
     

       </Grid>
    )
}

export default Member
