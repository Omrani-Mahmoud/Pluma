import { Grid } from '@material-ui/core'
import React from 'react'
import Member from './Member'

function Team() {
    const fake = [
            {
                first_name:'mahmoud',
                last_name:'omrani',
                type:'admin',
                email:'test@gmaiol.com'
            },
            {
                first_name:'salma',
                last_name:'ben med',
                type:'member',
                email:'test2@gmaiol.com'
            }
    ]
    return (
        <Grid md={12} xs={12} style={{padding:'15px',display:'flex',flexDirection:'column',justifyContent:'space-between',marginRight:'0px'}}>
        <span style={{fontSize:'15px',padding:'10px',background:'#6A7BFF',justifyContent:'center',display:'flex',color:'white',borderRadius:'10px',marginBottom:'20px'}}>Team</span>
        <Grid md={12} xs={12} style={{border:'1px solid #6A7BFF',padding:'15px',display:'flex',flexDirection:'column',justifyContent:'space-between',marginRight:'0px',background:'white',borderRadius:10,maxHeight:'400px',overflowY:'auto'}}>
        <span className='boldText' style={{fontSize:'25px'}}>TEAM MEMBERS</span>
            {
                    fake.map(acc=>{
                        return <Member account={acc} />
                    })
            }
        </Grid>
</Grid>

    )
}

export default Team
