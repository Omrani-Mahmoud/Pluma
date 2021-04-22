import { Grid } from '@material-ui/core'
import React from 'react'
import {ReactComponent as Bulb} from '../Assets/Icons/svg/fi-rs-bulb.svg';
import HomeCard from './HomeCard';

function Empty({hoverHandler}) {

    const sections = [
        {name:'email & letters',description:''},
        {name:'products',description:''},
        {name:'social ads',description:''},
        {name:'sales copy',description:''},
        {name:'websites copy',description:''},
        {name:'brainstorming',description:''},
        {name:'seo',description:''},   
    ]
    return (
        // <div style={{padding:'20px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',width:'100%',alignSelf:'center'}}>
        //     <Grid item md={6} xs={12} style={{filter:'drop-shadow(0 0 0.75rem #b5bdf5)',background:'white',padding:'10px 20px 10px 20px',textAlign:'center',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',borderRadius:'15px'}}>
        //         <h3 style={{color:'#6A7BFF',fontWeight:'normal'}}>Select an option first <Bulb style={{width:15,height:15,fill:'white',marginRight:'10px',fill:'#6A7BFF'}} />!</h3>
        //     </Grid>
        // </div>


<Grid
  container
  direction="row"
  justify="flex-start"
  style={{padding:'10 0 0 10px',maxHeight:'100vh',overflowY:'auto'}}

>
        {
            sections.map((elem,index)=>{
                    return <HomeCard hoverHandler={hoverHandler} elem={elem} panel_id={index+1}/>
            })
        }
        </Grid>

    )
}

export default Empty
