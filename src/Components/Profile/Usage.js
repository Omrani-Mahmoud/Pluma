import { Grid } from '@material-ui/core';
import React from 'react'
import { Line } from 'react-chartjs-2';

function Usage() {

  /*** Gradient ***/

    const chart_data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Credit used this month',
            data: [0, 50, 30, 100, 200],
            fill: {
              target: 'origin',
              above: 'rgba(167,167,255,0.5)',   // Area will be red above the origin
              below: 'rgba(167,167,255,0.3)'    // And blue below the origin
            },
            backgroundColor: 'white',
            borderColor: '#A3A0FB',
            radius:4,
            borderWidth:2,
            tension: 0.4,
         
  

          },
        ],
      };
    const chart_options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
    return (
        <Grid md={12} xs={12} style={{padding:'15px',display:'flex',flexDirection:'column',justifyContent:'space-between',marginRight:'0px'}}>
                    <span style={{fontSize:'15px',padding:'10px',background:'#6A7BFF',justifyContent:'center',display:'flex',color:'white',borderRadius:'10px',marginBottom:'20px'}}>Usage & Billing</span>
                    <Grid item md={12} xs={11} style={{width:'100%',padding:'15px',display:'flex',flexDirection:'column',justifyContent:'space-between',marginRight:'0px',background:'white',borderRadius:10,border:'1px solid #6A7BFF'}}>
                    <span className='boldText' style={{fontSize:'25px'}}>Usage</span>
                
                    <Grid item md={11} xs={12}>
                    <Line className='charthere' height={60} data={chart_data} options={chart_options} />    
                    </Grid>
                    </Grid>
        </Grid>

    )
}

export default Usage
