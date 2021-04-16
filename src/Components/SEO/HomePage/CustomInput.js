import { Grid, TextField } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  txtInput: {
    "& label.Mui-focused": {
      color: "grey",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#D9DDFB",
    },
  
  },
}));
 function CustomInput({name,placeholder,action,margin=10,type,v=''}) {
    const classes = useStyles();

    const inputs = JSON.parse(window.localStorage.getItem('oldInputs'))
    const [hasError, sethasError] = React.useState(false)
    const check_ = (e)=>{
        if(e.target.value.length>30)
           sethasError(true)
        else{
            sethasError(false);
            action({type:type,value:e.target.value})
        }
    }
    return (
       <Grid item md={12} xs={12} style={{marginBottom:`${margin}px`}}>
            <span style={{fontSize:'18px',textTransform:'capitalize'}}>{name}</span>
            <TextField className={classes.txtInput} inputProps={{maxLength:30}} error={hasError} helperText="Max input size is 30 character" fullWidth placeholder={placeholder} InputLabelProps={{shrink: true}} style={{marginTop:'5px'}} defaultValue={v.lenght>0?v:inputs[type]} onChange={(e)=>check_(e)}/>
       </Grid>
    )
}

export default CustomInput
