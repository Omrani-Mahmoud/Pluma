import { Grid, TextField } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  txtInput: {
    "& .MuiInput-underline:after": {
      borderBottomColor: "#D9DDFB",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#C4C4C4",
    },
    '&:hover fieldset': {
      borderBottomColor: 'white',
    },
  },
  greenUnderline: {
    '&:before': {
      backgroundColor: '#0f0',
    },
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        "&&&&:hover:before": {
          borderBottom: "1px solid #C4C4C4"
        }
      }
    }
  }
});

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
            <MuiThemeProvider theme={theme}>
            <TextField className={classes.txtInput}  inputProps={{maxLength:30}} error={hasError} helperText="Max input size is 30 character" fullWidth placeholder={placeholder} InputLabelProps={{shrink: true}} style={{marginTop:'5px'}} defaultValue={v.lenght>0?v:inputs[type]} onChange={(e)=>check_(e)}/>
            </MuiThemeProvider>
       </Grid>
    )
}

export default CustomInput
