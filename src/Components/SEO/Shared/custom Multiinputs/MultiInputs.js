import React from 'react'
import Chip from '@material-ui/core/Chip';
import { TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
      border:'1px solid #6A7BFF'
    
    },
  }));

function MultiInputs({action,type,keywords,removeType}) {
    let icon;
    const classes = useStyles();
    const inputRef = React.useRef();
    const [inputValue, setinputValue] = React.useState('')
    const [mouseIn, setmouseIn] = React.useState(false)
 
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
        <TextField style={{marginTop:'15px'}} label="KeyWords" value={inputValue} onKeyDown={(e)=>handleKeyDown(e)} onChange={(e)=>setinputValue(e.target.value)}/>
        {
            keywords && keywords.length>0 && 
        <Paper component="ul" className={classes.root}>
        {keywords.map(keyword => {
            return (
            <li key={keyword} onMouseEnter={()=>setmouseIn(true)} onMouseLeave={()=>setmouseIn(false)}>
                <Chip
                deleteIcon={<HighlightOffIcon  fontSize="small"  style={{color:!mouseIn?'#6A7BFF':'#EEE9FE'}}/>}
                label={keyword}
                onDelete={handleDelete(keyword)}
                className={classes.chip}
                style={ !mouseIn?{ background:'#EEE9FE',
                color:'#6A7BFF',
                fontSize:'15px'}:
                {
                  background:'#6A7BFF',
                  color:'#EEE9FE',
                  fontSize:'15px'
                }}
                />
            </li>)
            })
         }
             </Paper>
        }
        </>

    )
}

export default MultiInputs
