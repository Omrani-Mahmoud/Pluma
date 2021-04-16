import { Badge, Divider, Grid, IconButton, TextField } from '@material-ui/core'
import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {ReactComponent as DeleteIcon} from '../../Assets/Icons/svg/fi-rs-trash.svg';
import {ReactComponent as EditIcon} from '../../Assets/Icons/svg/fi-rs-pencil.svg';
import {ReactComponent as SaveIcon} from '../../Assets/Icons/svg/fi-rs-disk.svg';

// import SaveIcon from '@material-ui/icons/Save';
import CustomCard from '../Results/CustomCard';
import CustomBadge from './CustomBadge';
import EmptyCustomBadge from './EmptyCustomBadge';
function SingleRow({workspace}) {

    const [edit, setedit] = React.useState(false);
    const [hovred, sethovred] = React.useState({edit:false,delete:false})

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

    return (
        <>
    
        <Grid item md={12} style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
               
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
             
        
                    <DeleteIcon fontSize='small' style={DeletehoverStyle} onMouseEnter={()=>sethovred({...hovred,delete:true})} onMouseLeave={()=>sethovred({...hovred,delete:false})}/>
             
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
