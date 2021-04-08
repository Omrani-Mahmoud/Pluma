import { Grid, TextareaAutosize } from '@material-ui/core'
import React from 'react'

function CustomTextArea({action,type,v}) {
    const inputs = JSON.parse(window.localStorage.getItem('oldInputs'))

    return (
        <Grid item md={12} xs={12} style={{marginTop:'30px'}}>
        <span style={{fontSize:'18px',textTransform:'capitalize'}}>Description</span>
        <TextareaAutosize aria-label="minimum height" rowsMin={10} maxLength={400} style={{width:'100%',resize:'none',marginTop:'15px'}} defaultValue={v.lenght>0?v:inputs[type]}  onChange={(e)=>action({type:type,value:e.target.value})}/>

   </Grid>
    )
}

export default CustomTextArea
