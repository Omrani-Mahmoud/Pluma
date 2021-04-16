import React from 'react'
import { TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import CustomLI from './CustomLI';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
      background:'transparent'
    },
    chip: {
      margin: theme.spacing(0.5),
      border:'1px solid #6A7BFF'
    
    },
    txtInput: {
      "& label.Mui-focused": {
        color: "grey",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#D9DDFB",
      },
    
    },
  }));

function MultiInputs({action,type,keywords,removeType}) {
    let icon;
    const classes = useStyles();
    const inputRef = React.useRef();
    const [inputValue, setinputValue] = React.useState('')
 
    const handleDelete = (chipToDelete) => () => {
        // setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
        action({type:removeType,value:chipToDelete});
      };
    
     const handleKeyDown = (event) =>{
        if(event.keyCode === 13) { 
            action({type:type,value:event.target.value});
            setinputValue('');
      }
    }
    return (
        <>
        <TextField className={classes.txtInput}
 style={{marginTop:'15px'}} label="KeyWords" value={inputValue} onKeyDown={(e)=>handleKeyDown(e)} onChange={(e)=>setinputValue(e.target.value)}/>
        {
            keywords && keywords.length>0 && 
        <Paper elevation={0} component="ul" className={classes.root}>
        {keywords.map(keyword => {
            return ( <CustomLI classes={classes} keyword={keyword} handleDelete={handleDelete} />)
            })
         }
             </Paper>
        }
        </>

    )
}

export default MultiInputs
