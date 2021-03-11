import { Grid, TextField } from '@material-ui/core'
import React from 'react'

function CustomInput({name,placeholder,action,margin=10,type,v}) {
    const inputs = JSON.parse(window.localStorage.getItem('oldInputs'))
    return (
       <Grid item md={12} xs={12} style={{marginBottom:`${margin}px`}}>
            <span style={{fontSize:'18px',textTransform:'capitalize'}}>{name}</span>
            <TextField fullWidth placeholder={placeholder} InputLabelProps={{shrink: true}} style={{marginTop:'5px'}} defaultValue={v.lenght>0?v:inputs[type]} onChange={(e)=>action({type:type,value:e.target.value})}/>
       </Grid>
    )
}

export default CustomInput
