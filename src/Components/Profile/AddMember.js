import { Button, Divider, FormControl, Grid, Input, InputAdornment, InputLabel, TextField } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

import React from 'react';
import CustomSnackbar from '../SnackBars/CustomSnackBar';





const useStyles = makeStyles((theme) => ({
    margin:{
        marginTop:'55px'
    },
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
function AddMember({addMember__}) {
    const classes = useStyles();

    const [email, setEmail] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState("");
    const [loading, setloading] = React.useState(false);



    React.useEffect(() => {
      setOpen(true);
      setloading(false);
    }, [status])


    return (
      <>
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
                  content="An email has been sent with intructions to the new member!"
                  type="success"
              />
            }
        <Grid md={3} xs={12} >
        <span style={{fontSize:'15px',padding:'10px',background:'#6A7BFF',justifyContent:'center',display:'flex',color:'white',borderRadius:'10px',marginBottom:'20px'}}>Member</span>
          <Grid md={12} xs={12} style={{border:'1px solid #6A7BFF',paddingLeft:'15px',paddingRight:'15px', paddingTop:'27px',display:'flex',flexDirection:'column',height:'350px',borderRadius:'10px',background:'white'}}>
          <section>
              <span className='boldText' style={{textTransform:'uppercase',fontSize:'20px'}}>Add member</span>
          </section>
  
        <FormControl className={classes.margin}>
          <span style={{fontSize:'15px',color:'#6A7BFF'}}>New Member</span>

        <MuiThemeProvider theme={theme}>
            <TextField size='small' type='email' onChange={(e)=>setEmail(e.target.value)}  className={classes.txtInput}  inputProps={{maxLength:30}} fullWidth placeholder={'member email'} InputLabelProps={{shrink: true}} style={{marginTop:'5px'}}  />
        </MuiThemeProvider>
        {
          loading? 
          <CircularProgress style={{color:'#6A7BFF',alignSelf:'center',marginTop:'33px'}} size={20} />
            :
          <Button onClick={()=>{addMember__(email,setStatus);setloading(true)}} style={{background:'#EBEDFC',color:'#6A7BFF' ,width:'109px',borderRadius:'20px',marginTop:'33px'}} >ADD</Button>

        }

        </FormControl>
          </Grid>
          </Grid>
          </>
    )
}

export default AddMember
