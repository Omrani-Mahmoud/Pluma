import React from 'react'
import Typography from '@material-ui/core/Typography';
import img from '../Assets/img/mobile.png'
import logo from '../Assets/img/pluma logo/Pluma Logo.png'
import { Grid } from '@material-ui/core';
function Mobile() {
    return (
        <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
               <div style={{width:'100%'}}>
               <img src={logo} width='100%' />
               <h2 style={{textAlign:'center',color:'#6A7BFF'}}>Oops, under construction ...</h2>
                    <img src={img} width='100%' />
               </div>
        </Grid>

    )
}

export default Mobile
