import { Button, Divider, FormControl, Grid, Input, InputAdornment, InputLabel, TextField } from '@material-ui/core'
import React from 'react'



import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import {ReactComponent as EyeIcon} from '../../Assets/Icons/svg/fi-rs-eye.svg';
import {ReactComponent as ClosedEyeIcon} from '../../Assets/Icons/svg/fi-rs-eye-crossed.svg';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import CustomSnackbar from '../SnackBars/CustomSnackBar';

const userPassInfo = {
  old_password:'',
  new_password:'',

};
const reducer = (state,action)=>{
  switch (action.type) {
          
                  case 'current_pass':
                      return {...state,old_password:action.value}
                  
                      case 'new_pass':
                          return {...state,new_password:action.value}
      default:
         return state
  }
}


const useStyles = makeStyles((theme) => ({
  txtInput: {
    "& label.Mui-focused": {
      color: "#6A7BFF",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#EBEDFC",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#C4C4C4",
      },
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


function PasswordSection({update_password}) {
  const [form, dispatcher] = React.useReducer(reducer, userPassInfo)

    const classes = useStyles();
    const [showPass, setshowPass] = React.useState({one:false,two:false});
    const [isFocused, setIsFocused] = React.useState({one:false,two:false});
    const [status, setStatus] = React.useState("");
    const [loading, setloading] = React.useState(false);
    const [open, setOpen] = React.useState(false);


    const handleClickShowPasswordTwo = ()=>{
        setshowPass({...showPass,two:!showPass.two})
    }

    const handleClickShowPasswordOne = ()=>{
      setshowPass({...showPass,one:!showPass.one})
  }



  React.useEffect(() => {
    setOpen(true);
    setloading(false);
  }, [status])



    return (
      <Grid md={3} xs={12} >

{
              status === 'error' &&
                <CustomSnackbar
                    setter={setOpen}
                    open={open}
                    content="Ops, Something Wrong!"
                    type="error"
                />
              }
              { 
                status ===200 && 
              <CustomSnackbar
                  setter={setOpen}
                  open={open}
                  content="Your password has been updated successfully!"
                  type="success"
              />
            }


      <span style={{fontSize:'15px',padding:'10px',background:'#6A7BFF',justifyContent:'center',display:'flex',color:'white',borderRadius:'10px',marginBottom:'20px'}}>Password</span>
        <Grid md={12} xs={12} style={{border:'1px solid #6A7BFF',padding:'15px',display:'flex',flexDirection:'column',justifyContent:'space-around',height:'350px',borderRadius:'10px',background:'white'}}>
        <section>
            <span className='boldText' style={{textTransform:'uppercase',fontSize:'20px'}}>change password</span>
        </section>

      <FormControl className={classes.margin}>
        <span style={{color:isFocused.one?'#6A7BFF':'#8a8a8a'}}>Current Password</span>
        <MuiThemeProvider theme={theme}>

        <TextField
                  className={classes.txtInput} 
                  size='small'

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
        </MuiThemeProvider>
      </FormControl>



      <FormControl className={classes.margin}>
        <span  style={{color:isFocused.two?'#6A7BFF':'#8a8a8a'}}>New Password</span>
        <MuiThemeProvider theme={theme}>

        <TextField
               className={classes.txtInput} 
            size='small'
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
        </MuiThemeProvider>
      </FormControl>


      {
          loading? 
          <CircularProgress style={{color:'#6A7BFF',alignSelf:'center',marginTop:'33px'}} size={20} />
          :

      <Button onClick={()=>update_password(form,setStatus)} style={{background:'#EBEDFC',color:'#6A7BFF' ,width:'109px',borderRadius:'20px',marginTop:'33px'}} >Save</Button>

      }
        </Grid>
        </Grid>
    )
}

export default PasswordSection
