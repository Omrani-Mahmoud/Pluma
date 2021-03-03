import { Grid } from '@material-ui/core';
import React from 'react'
 import {ReactComponent as PremiumIcon} from '../../Assets/Icons/svg/fi-rs-diamond.svg';
 import {ReactComponent as GiftIcon} from '../../Assets/Icons/svg/Free Trial.svg'

function Plans() {
    return (
        <Grid md={6} xs={12} style={{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-around',marginRight:'15px',height:'280px'}}>
            <section >
                <span className='boldText' style={{textTransform:'uppercase',fontSize:'25px'}}>change plan</span>
             </section>
            <div style={{height:'65px',background:'#D9DDFB',display:'flex',alignItems:'center',padding:'10px',justifyContent:'space-between'}}>
                <span style={{color:'#6A7BFF',fontSize:'18px'}}><GiftIcon style={{width:'13.06',height:'13.12',fill:'#6A7BFF',marginRight:'28px'}} />Free Trail</span>
                <span style={{fontSize:'18px',color:'#6A7BFF'}}>0$/mo</span>
            </div>
            <div item md={6} style={{height:'65px',display:'flex',alignItems:'center',padding:'10px',border:'1px solid #C4C4C4',justifyContent:'space-between'}}>
                <span style={{fontSize:'18px'}}><PremiumIcon style={{width:'13.06',height:'13.12',fill:'black',marginRight:'28px'}} />Premium Subscription</span>
                <span style={{fontSize:'18px'}}>0$/mo</span>
            </div>

       </Grid>
    )
}

export default Plans
