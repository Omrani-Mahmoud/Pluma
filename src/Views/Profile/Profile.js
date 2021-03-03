import React from 'react'
import { Badge, Button, Container, Grid } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import AccountInfoSection from '../../Components/Profile/AccountInfoSection';
import PasswordSection from '../../Components/Profile/PasswordSection';
import Plans from '../../Components/Profile/Plans';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

  import {userState} from '../../Atoms/Atoms'

const reducer = (state,action)=>{
    switch (action.type) {
        case 'fullname':
            return {...state,fullname:action.value}

            case 'email':
               return {...state,email:action.value}
            
                    case 'current_pass':
                        return {...state,current_password:action.value}
                    
                        case 'new_pass':
                            return {...state,new_password:action.value}
                            case 'img':
                                return {...state,img:action.value}
        default:
           return state
    }
}



const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(17),
      height: theme.spacing(17),
    },
  }));
function Profile() {
    const classes = useStyles();
    const [user, setUser] = useRecoilState(userState);
    const fileRef = React.useRef('');
    const userInfo = {
        fullname:user.fullname,
        email:user.email,
        current_password:'',
        new_password:'',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Felix_Cat-Haha.svg/1200px-Felix_Cat-Haha.svg.png'
    };
    const [userForm, dispatch] = React.useReducer(reducer, userInfo)

    const check_ = ()=>{
        let check = false;
        if(typeof userForm?.img == 'object'){
            check=true
        }
        else{
            check=false
        }
        return check

    }
    return (
        <Container>
        <Grid item md={12} xs ={12} style={{padding:'20px'}}>
        <section style={{background:'rgb(217,221,251)',padding:'10px',width:'50%',marginBottom:'30px'}}>
                <span className='boldText' style={{textTransform:'uppercase',fontSize:'30px',marginLeft:'14px'}}>PROFILE</span>
        </section>
        <div style={{background:'white',padding:'20px'}}>
            <Badge onClick={()=>fileRef.current.click()} style={{cursor:'pointer'}}  badgeContent={<AddCircleOutlineIcon  style={{fontSize:'12px'}} />} color="primary"  anchorOrigin={{vertical: 'bottom',horizontal: 'right'}}>
                <section>
                    <Avatar alt="Remy Sharp" src={check_()?URL.createObjectURL(userForm.img):userForm?.img } className={classes.large} variant='square' />
                    <input type='file' hidden ref={fileRef} onChange={(e)=>dispatch({type:'img',value:e.target.files[0]})} />
                </section>
            </Badge>    
            <div style={{display:'flex',marginTop:'46px',justifyContent:'space-between'}}>

               <AccountInfoSection dispatcher={dispatch} form={userForm} />

               <PasswordSection  dispatcher={dispatch} form={userForm}  />
               
            </div>
            <Plans />
            <div style={{height:'100px',padding:'10px',marginTop:'80px'}}>
                    
                    <Button onClick={()=>{console.log('FORM HERE',userForm)}} variant="contained" disableElevation style={{borderRadius:'0px',float:'right',width:'327px',background:'#6A7BFF',color:'white',fontWeight:'bold'}}>
                    save
                    </Button>
                    <Button variant="outlined" disableElevation style={{borderRadius:'0px',float:'right',width:'327px',marginRight:'20px',borderColor:'#6A7BFF',color:'#6A7BFF',fontWeight:'bold'}}>
                        Upgrade my plan
                    </Button>
            </div>
        </div>
        
        </Grid>
    </Container>
    )
}

export default Profile
