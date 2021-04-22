import { Button, Divider, FormControl, Grid, Input, TextField } from '@material-ui/core'
import React, { forwardRef,useImperativeHandle } from 'react'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

  import {userState} from '../../Atoms/Atoms'
  import { makeStyles } from "@material-ui/core/styles";
  import CustomSnackbar from '../SnackBars/CustomSnackBar';
  import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

 

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
const AccountInfoSection = forwardRef(({dispatcher,form},ref)=> {
    const classes = useStyles();
    const [user, setUser] = useRecoilState(userState);
    const [isFocused, setIsFocused] = React.useState({one:false,two:false});
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState("");




    useImperativeHandle(ref,()=>({
      show_snackbar(v){
        setStatus(v);
      }
    }))
   

    React.useEffect(() => {
      setOpen(true)
    }, [status])

    return (
      <Grid md={3} xs={12} >
          <span style={{fontSize:'15px',padding:'10px',background:'#6A7BFF',justifyContent:'center',display:'flex',color:'white',borderRadius:'10px',marginBottom:'20px'}}>Personal</span>
        <Grid md={12} xs={12} style={{borderRadius:'10px',border:'1px solid #6A7BFF',padding:'15px',display:'flex',flexDirection:'column',justifyContent:'space-around',height:'350px',background:'white'}}>
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
                  content="Your informations has been updated successfully!"
                  type="success"
              />
            }
         <section >
            <span className='boldText' style={{textTransform:'uppercase',fontSize:'20px'}}>Personal information</span>
        </section>

        <FormControl className={classes.margin}>
        <span style={{color:'#6A7BFF'}}>First Name</span>
        <MuiThemeProvider theme={theme}>

        <TextField
          onFocus={()=>setIsFocused({...isFocused,one:true})}
          onBlur={()=>setIsFocused({...isFocused,one:false})}
          onChange={(e)=>dispatcher({type:'first_name',value:e.target.value})}
          defaultValue={form.first_name}
          className={classes.txtInput} 

        />
        </MuiThemeProvider>
      </FormControl>

      <FormControl >
        <span style={{color:'#6A7BFF'}}>Last name</span>
        <MuiThemeProvider theme={theme}>

        <TextField
          className={classes.txtInput} 
          onFocus={()=>setIsFocused({...isFocused,two:true})}
          onBlur={()=>setIsFocused({...isFocused,two:false})}
          onChange={(e)=>dispatcher({type:'last_name',value:e.target.value})}
          defaultValue={form.last_name}
        />
        </MuiThemeProvider>
      </FormControl>
      <FormControl className={classes.margin}>
        <span style={{color:'#6A7BFF'}}>Billing Email</span>
        <MuiThemeProvider theme={theme}>

        <TextField
        disabled
          className={classes.txtInput} 
          onFocus={()=>setIsFocused({...isFocused,two:true})}
          onBlur={()=>setIsFocused({...isFocused,two:false})}
          // onChange={(e)=>dispatcher({type:'last_name',value:e.target.value})}
          defaultValue={form.email}
          placeholder='Billing mail'
        />
        </MuiThemeProvider>
      </FormControl>
        
      <Button style={{background:'#EBEDFC',color:'#6A7BFF' ,width:'109px',borderRadius:'10px',marginTop:'33px'}} >Save</Button>


        </Grid>
        </Grid>

    )
})

export default AccountInfoSection
