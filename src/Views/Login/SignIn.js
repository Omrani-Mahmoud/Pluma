import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import auth from '../../Auth';
import CircularProgress from '@material-ui/core/CircularProgress';
import useToken from '../../Hooks/useToken';
import useGetUser from '../../Hooks/useGetUser';
import jwt from 'jsonwebtoken';
import logo from '../../Assets/img/pluma logo/Pluma Logo.png';
import loginBG from '../../Assets/img/loginBG.png';

import CustomSnackbar from '../../Components/SnackBars/CustomSnackBar';
import axios from 'axios'
import {uri} from "../../Url_base";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import {motion} from 'framer-motion'
import {ReactComponent as BackIcon} from '../../Assets/Icons/svg/fi-rs-arrow-small-left.svg';

const initialState = {
  username:'',
    password:''
}


const reducer = (state,action)=>{
        switch (action.type) {
            case 'userName':
                return{...state,username:action.value};
            case 'password':
                return{...state,password:action.value}
        
            default:
                return state
        }
}

function Copyright() {


  return (
    <Typography variant="body2" color="textPrimary" align="center">
      {'Copyright © MartechLabs '}
      {/* <Link color="inherit" href="#">
        Logistio
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${loginBG})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(5),
    width:200,
    height:50
  },
  form: {
    width: '60%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background:'#6A7BFF',
    color:'white',
    fontWeight:'bold',
    '&:hover':{
        background:'#6A7BFF',

    },
    borderRadius:'0px'
    

  },
  loader: {
    margin: '10px 50% 10px',
    textAlign:'center',
    color:'#6A7BFF'
  
  },
  txtInput: {
    '& label.Mui-focused': {
      color: 'grey',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      
     
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  },
}));

export default function SignIn(props) {

  const sideMenuVariant = {
    hidden:{
        scale:0,
    },
    visible:{
        scale:1,

        transition:{
            
            duration:0.6
        }
    }
}


  const [setToken,getToken] = useToken();
  const classes = useStyles();
  const [userInfo, dispatch] = React.useReducer(reducer, initialState);
  let history = useHistory();
  const [loading, setloading] = React.useState(false);
  const [loadingResetPass, setloadingResetPass] = React.useState(false);

  const [status, setStatus] = React.useState('');
  const [openLogin, setOpenLogin] = React.useState(false);

  const [statusResetPass, setStatusResetPass] = React.useState('');
  const [openPassReset, setOpenPassReset] = React.useState(false);


  const [forgotPass, setforgotPass] = React.useState(false);

  

  const AuthHandler = ()=>{
      setloading(true);
    // auth.login(userInfo,setloading,(token,ch)=>{
    //     setToken(token);
    //     console.log('DECODED__token:::',jwt.decode(token))
    //     // history.push('/home');
    //     if(ch)
    //       history.push({pathname:'/home/profile',state:'new'});
    //     else
    //       history.push('/home');
    // })
    setOpenLogin(true)

    setStatus('error');
}

const _reset = ()=>{

      // axios.post(`${uri.link}/password_reset`, {
      //     username:userInfo.username,
      //   })
      //   .then(function (res) {
      //     if(res.status===200){
      //       setStatusResetPass(200);
      //         console.log('RESTE RESPONSE -------->',res.data)
      //     }
      //         else
      //         setStatusResetPass('error')
      //   })
      //   .catch(function (error) {
      //     setStatusResetPass('error')
      //   });
      setloadingResetPass(true)
        setOpenPassReset(true)
        setStatusResetPass('error')

}



// React.useEffect(() => {
//   if(auth.isAuthenticated())
//       history.push('/home')
    

// }, [])

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      
      {
                       
                        status==='error'?
                        <CustomSnackbar setter={setOpenLogin} open={openLogin}  content='Ops, Wrong user credentials !' type="error"/>
                        : null
                    }
                        {
                        statusResetPass===200?
                        <CustomSnackbar setter={setOpenPassReset} open={openPassReset}  content='An email has been sent!' type="success"/>
                        :
                        statusResetPass==='error'?
                        <CustomSnackbar setter={setOpenPassReset} open={openPassReset}  content='Ops, Something Wrong!' type="error"/>
                        : null
                    }
                    
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={0} square style={{padding:'50px',display:'flex',flexDirection:'column',justifyContent:'center'}}>

        <motion.div variants={sideMenuVariant} initial='hidden' animate='visible' className={classes.paper}>
          <Avatar className={classes.avatar} src={logo} variant='square' />
          <Typography variant="span" style={{alignSelf:'center',fontSize:'15px',fontWeight:100}}>
            {
              forgotPass?
              'Enter your email and we send you a password reset link.'
              :
              'Welcome back! Please login to your account.'
            } 
          </Typography>
          {
              !forgotPass?
            
          <form className={classes.form} noValidate>
              
                <TextField
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  id="userName"
                  label='Email Adress'
                  name="userName"
                  autoComplete="userName"
                  autoFocus
                  className={classes.txtInput}
                  onChange={(e)=>{dispatch({type:'userName',value:e.target.value})}}
                />
                <TextField

                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label='Password'
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  className={classes.txtInput}
                  onChange={(e)=>{dispatch({type:'password',value:e.target.value})}}
                />
                <Link onClick={()=>{setforgotPass(true);setloading(false)}} variant="body2" color='textSecondary' style={{float:'right',cursor:'pointer'}}>
                    Forgot Password
                </Link>
            
            {
              !loading && 
              <Button
                onClick={AuthHandler}
                fullWidth
                variant="contained"
                className={classes.submit}
              
            >
              Log in
            </Button>
            }
            {
              loading && 
               <CircularProgress size={24}        className={classes.loader}
/>
            }
          
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
          :
          <form className={classes.form} noValidate>
              
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="userName"
            label='Email Adress'
            name="userName"
            autoComplete="userName"
            autoFocus
            className={classes.txtInput}
            onChange={(e)=>{dispatch({type:'userName',value:e.target.value})}}
          />
          {
              !loadingResetPass && 
              <Button
                onClick={_reset}
                fullWidth
                variant="contained"
                className={classes.submit}
            >
              Send Request
            </Button>
            
            }
            {
              loadingResetPass && 
              <div style={{textAlign:'center'}}>
               <CircularProgress size={24}        className={classes.loader} />
            </div>
            }
          <BackIcon style={{width:'40px',height:'40px',fill:'#c4c4c4',cursor:'pointer'}} onClick={()=>{setforgotPass(false);setloadingResetPass(false)}} />
          </form>
}
        </motion.div>
      </Grid>
    </Grid>
  );
}