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
import AddMember from '../../Components/Profile/AddMember';
import Team from '../../Components/Profile/Team/Team';
import Usage from '../../Components/Profile/Usage';
import Billing from '../../Components/Profile/Billing';

const reducer = (state,action)=>{
    switch (action.type) {
        case 'first_name':
            return {...state,first_name:action.value}

            case 'last_name':
               return {...state,last_name:action.value}
            
                    // case 'current_pass':
                    //     return {...state,current_password:action.value}
                    
                    //     case 'new_pass':
                    //         return {...state,new_password:action.value}
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
function Profile({first_name='',last_name='',email='',update__,addMember__,update_password}) {
    
    const accountInfoRef = React.useRef();
    // const classes = useStyles();
    // const fileRef = React.useRef('');
    const userInfo = {
        first_name:first_name,
        last_name:last_name,
        // current_password:'',
        // new_password:''
    };
    const [userForm, dispatch] = React.useReducer(reducer, userInfo)

    // const check_ = ()=>{
    //     let check = false;
    //     if(typeof userForm?.img == 'object'){
    //         check=true
    //     }
    //     else{
    //         check=false
    //     }
    //     return check

    // }

    return (
        <Grid container  direction="column"
        justify="flex-start"
        style={{padding:'30px'}}>
        <section style={{background:'rgb(217,221,251)',padding:'10px',width:'45%',marginBottom:'30px',borderRadius:'10px' }}>
                <span className='boldText' style={{textTransform:'uppercase',fontSize:'30px',marginLeft:'14px'}}>Welcome back, {first_name}</span>
        </section>
        <div >
            {/* <Badge onClick={()=>fileRef.current.click()} style={{cursor:'pointer'}}  badgeContent={<AddCircleOutlineIcon  style={{fontSize:'12px'}} />} color="primary"  anchorOrigin={{vertical: 'bottom',horizontal: 'right'}}>
                <section>
                    <Avatar alt="Remy Sharp" src={check_()?URL.createObjectURL(userForm.img):userForm?.img } className={classes.large} variant='square' />
                    <input type='file' hidden ref={fileRef} onChange={(e)=>dispatch({type:'img',value:e.target.files[0]})} />
                </section>
            </Badge>     */}
        <Grid md={12} xs={12} style={{padding:'15px',display:'flex',flexDirection:'row',justifyContent:'space-between',marginRight:'0px'}}>

               <AccountInfoSection  update__={update__} ref={accountInfoRef} dispatcher={dispatch} form={userForm} email={email} />
                <AddMember addMember__={addMember__} />
               <PasswordSection  update_password ={update_password}dispatcher={dispatch} form={userForm}  />

            </Grid>
            <Team />
            <Usage />
            <Plans />
        
            {/* <div style={{height:'100px',padding:'10px',marginTop:'80px'}}>
                    
                    <Button onClick={()=>{update__(userForm,accountInfoRef.current.show_snackbar)}} variant="contained" disableElevation style={{borderRadius:'0px',float:'right',width:'327px',background:'#6A7BFF',color:'white',fontWeight:'bold'}}>
                    save
                    </Button>
                    <Button variant="outlined" disableElevation style={{borderRadius:'0px',float:'right',width:'327px',marginRight:'20px',borderColor:'#6A7BFF',color:'#6A7BFF',fontWeight:'bold'}}>
                        Upgrade my plan
                    </Button>
            </div> */}
        </div>
        
        </Grid>

    )
}

export default Profile
