import { Divider, FormControl, Grid, Input, TextField } from '@material-ui/core'
import React from 'react'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

  import {userState} from '../../Atoms/Atoms'

  import { makeStyles } from "@material-ui/core/styles";

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
function AccountInfoSection({dispatcher,form}) {
    const classes = useStyles();
    const [user, setUser] = useRecoilState(userState);
    const [isFocused, setIsFocused] = React.useState({one:false,two:false});

    return (
        <Grid md={6} xs={12} style={{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-around',height:'350px',marginRight:'15px'}}>
         <section >
            <span className='boldText' style={{textTransform:'uppercase',fontSize:'25px'}}>account information</span>
        </section>

        <FormControl className={classes.margin}>
        <span style={{color:isFocused.one?'#6A7BFF':'#8a8a8a'}}>Full Name</span>
        <Input
          onFocus={()=>setIsFocused({...isFocused,one:true})}
          onBlur={()=>setIsFocused({...isFocused,one:false})}
          onChange={(e)=>dispatcher({type:'fullname',value:e.target.value})}
          defaultValue={form.fullname}
        />
      </FormControl>

      <FormControl className={classes.margin}>
        <span style={{color:isFocused.two?'#6A7BFF':'#8a8a8a'}}>Email Adress</span>
        <Input
          onFocus={()=>setIsFocused({...isFocused,two:true})}
          onBlur={()=>setIsFocused({...isFocused,two:false})}
          onChange={(e)=>dispatcher({type:'email',value:e.target.value})}
          defaultValue={form.email}
        />
      </FormControl>
        

        <Divider />

        </Grid>
    )
}

export default AccountInfoSection
