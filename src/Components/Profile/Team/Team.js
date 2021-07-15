import { Grid } from '@material-ui/core'
import React from 'react'
import Member from './Member'
import {RecoilRoot,atom,selector,useRecoilState,useRecoilValue,} from "recoil";
import {getToken} from '../../../Selectors/TokenSelector'
import {uri} from "../../../Url_base";
import jwt from 'jsonwebtoken'
import axios from 'axios'
import NoMembers from './NoMembers'
function Team() {
    const authToken = useRecoilValue(getToken);
    const [members, setmembers] = React.useState([]);

    const get_members = ()=>{
        axios({
          method:'POST',
          url:`${uri.link}/all_members`,
          headers: {
              Authorization: 'Bearer ' + authToken
          }
        }).then(res=>{
            if(res.data.members)
                setmembers(res.data.members); 
            
        })
        .catch(err=>{
        //   cb('error')
        console.log(err)
        })
    
      };


    const fake = [
            {
                first_name:'mahmoud',
                last_name:'omrani',
                type:'admin',
                email:'test@gmaiol.com',
                is_active:false

            },
            {
                first_name:'salma',
                last_name:'ben med',
                type:'member',
                email:'test2@gmaiol.com',
                is_active:false
            }
    ]

    React.useEffect(() => {
        get_members();
    }, [])
    return (
        <Grid md={12} xs={12} style={{padding:'15px',display:'flex',flexDirection:'column',justifyContent:'space-between',marginRight:'0px'}}>
        <span style={{fontSize:'15px',padding:'10px',background:'#6A7BFF',justifyContent:'center',display:'flex',color:'white',borderRadius:'10px',marginBottom:'20px'}}>Team</span>
        <Grid md={12} xs={12} style={{border:'1px solid #6A7BFF',padding:'15px',display:'flex',flexDirection:'column',justifyContent:'space-between',marginRight:'0px',background:'white',borderRadius:10,maxHeight:'400px',overflowY:'auto'}}>
        <span className='boldText' style={{fontSize:'25px'}}>TEAM MEMBERS</span>
            {
                  members.length>0 ?
                  members.map(acc=>{
                        return <Member active={acc.is_active} account={acc} />
                    })
                    :
                    <NoMembers />
            }
        </Grid>
</Grid>

    )
}

export default Team
