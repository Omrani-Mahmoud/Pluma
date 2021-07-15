import React from 'react'
import {ReactComponent as DeleteIcon} from '../../Assets/Icons/svg/fi-rs-trash.svg';
import {ReactComponent as EditIcon} from '../../Assets/Icons/svg/fi-rs-pencil.svg';
import {ReactComponent as SaveIcon} from '../../Assets/Icons/svg/fi-rs-disk.svg';
import { Badge, Divider, Grid, IconButton, TextField } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import SaveIcon from '@material-ui/icons/Save';

function NewWorkSpace({push_new,isNewSetter,addWorkspace}) {


    //const [edit, setedit] = React.useState(false);

    // handle if the icons is hovred or not
    const [hovred, sethovred] = React.useState({edit:false,delete:false})

    //workspace input value
    const [inputValue, setinputValue] = React.useState('')

    //if the input got an error => true
    const [error, seterror] = React.useState(false)



    //hover style
    const DeletehoverStyle={
        fill:!hovred.delete?'#D9DDFB':'#6A7BFF',
        transition:'0.5s',
        cursor:'pointer',
        marginRight:'15px',
        width:20,height:24
    }


    // function that saves the workspace and clear the values and remove the input component
    const save_edit= ()=>{
        if(inputValue.length>0){
            // push_new(inputValue)
            addWorkspace(inputValue)
            setinputValue('');
            isNewSetter(false)

        }
        else 
            seterror(true)
       

    }

    // cancel function easy 
    const cancel= ()=>{
        isNewSetter(false);
        setinputValue('');
    }


    // the input handler
    const handleChange = (e)=>{
        setinputValue(e.target.value)
    }
    return (
        <div>
             <Grid item md={12} style={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
               
               
                    {/* <TextField label='Add New  Workspace Name' style={{marginLeft:'45px',marginBottom:'18px'}}/> */}
                    <input onChange={(e)=>handleChange(e)} value={inputValue} placeholder='Add New  Workspace Name' style={{border:'none', outline:'none',borderRadius:'5px',padding:'5px',marginLeft:'45px',marginBottom:'18px'}} />

                <div>
                    
            
                        
                    <SaveIcon  onClick={()=>save_edit()} fontSize='small' style={{ cursor:'pointer',marginRight:'15px',fill:'#6A7BFF', width:20,height:24}} />
                    
             
        
                    <DeleteIcon onClick={()=>cancel()} fontSize='small' style={DeletehoverStyle} onMouseEnter={()=>sethovred({...hovred,delete:true})} onMouseLeave={()=>sethovred({...hovred,delete:false})}/>
             
                </div>
            

        </Grid>
        {
            error && 
            <span style={{color:'#ff4a4a'}}>Empty names not allowed !</span>
        }
        <Divider variant="middle" style={{marginTop:'5px',marginLeft:'40px'}}/>

        </div>
    )
}

export default NewWorkSpace
