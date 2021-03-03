import { Divider, FormControl, Grid, Input, InputAdornment, InputLabel, TextField } from '@material-ui/core'
import React from 'react'



import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import {ReactComponent as EyeIcon} from '../../Assets/Icons/svg/fi-rs-eye.svg';
import {ReactComponent as ClosedEyeIcon} from '../../Assets/Icons/svg/fi-rs-eye-crossed.svg';


const useStyles = makeStyles((theme) => ({
  txtInput: {
    "& label.Mui-focused": {
      color: "#6A7BFF",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#C4C4C4",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#C4C4C4",
      },
    },
  },
}));
function PasswordSection({dispatcher,form}) {
    const classes = useStyles();
    const [showPass, setshowPass] = React.useState({one:false,two:false});
    const [isFocused, setIsFocused] = React.useState({one:false,two:false});


    const handleClickShowPasswordTwo = ()=>{
        setshowPass({...showPass,two:!showPass.two})
    }

    const handleClickShowPasswordOne = ()=>{
      setshowPass({...showPass,one:!showPass.one})
  }
    return (
        <Grid md={6} xs={12} style={{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-around',height:'350px'}}>
        <section>
            <span className='boldText' style={{textTransform:'uppercase',fontSize:'25px'}}>change password</span>
        </section>

      <FormControl className={classes.margin}>
        <span style={{color:isFocused.one?'#6A7BFF':'#8a8a8a'}}>Current Password</span>
        <Input
          onFocus={()=>setIsFocused({...isFocused,one:true})}
          onBlur={()=>setIsFocused({...isFocused,one:false})}
          type={showPass.one?'text':'password'}
          id="input-with-icon-adornment"
          onChange={(e)=>dispatcher({type:'current_pass',value:e.target.value})} 
          endAdornment={
            <InputAdornment position="end" onClick={()=>handleClickShowPasswordOne()} style={{cursor:'pointer'}}>
              {
                showPass.one?
                <ClosedEyeIcon style={{width:'13.83px',height:'12.34px',fill:'#C4C4C4'}}/>
                :
                <EyeIcon  style={{width:'13.83px',height:'12.34px',fill:'#C4C4C4'}}  />
              }
            </InputAdornment>
          }
        />
      </FormControl>



      <FormControl className={classes.margin}>
        <span  style={{color:isFocused.two?'#6A7BFF':'#8a8a8a'}}>New Password</span>
        <Input
          onFocus={()=>setIsFocused({...isFocused,two:true})}
          onBlur={()=>setIsFocused({...isFocused,two:false})}
          type={showPass.two?'text':'password'}
          id="input-with-icon-adornment"
          onChange={(e)=>dispatcher({type:'new_pass',value:e.target.value})}
          endAdornment={
            <InputAdornment position="end" onClick={()=>handleClickShowPasswordTwo()} style={{cursor:'pointer'}}>
              {
                showPass.two?
                <ClosedEyeIcon style={{width:'13.83px',height:'12.34px',fill:'#C4C4C4'}}/>
                :
                <EyeIcon  style={{width:'13.83px',height:'12.34px',fill:'#C4C4C4'}}  />
              }
            </InputAdornment>
          }
        />
      </FormControl>


      
        <Divider />

        </Grid>
    )
}

export default PasswordSection
