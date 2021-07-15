import { Button, Divider, Grid, MenuItem, RadioGroup, Select } from '@material-ui/core'
import React from 'react'
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import {ReactComponent as Close} from '../../Assets/Icons/svg/fi-rs-cross.svg'




const PlumaRadio = withStyles({
    root: {
      color:'#6A7BFF',
      '&$checked': {
        color: '#6A7BFF',
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);


function Billing({handleClose}) {
    const [selectedValue, setSelectedValue] = React.useState('starter');
    const [words, setWords] = React.useState(30);
    const [members, setMembers] = React.useState(2);

    const handleChangeR = (event) => {
        setSelectedValue(event.target.value);
      };

      const handleChangeSC = (event) => {
        setWords(event.target.value);
      };
      const handleChangeSM = (event) => {
        setMembers(event.target.value);
      };

    return (
      <Grid item md={8} xs={12} style={{background:'white',padding:'20px',borderRadius:'10px',height:'700px',overflowY:'auto'}}>
          <section style={{borderBottom:'1px solid #D9DDFB',paddingBottom:'15px'}}>
         <span className='boldText' style={{fontSize:'25px'}}>UPDATE SUBSCRIPTION</span>
         <Close style={{fill:'#6A7BFF',width:'15px',height:'15px',float:'right',cursor:'pointer'}} onClick={handleClose} />
         </section>

         <section style={{borderBottom:'1px solid #D9DDFB',paddingBottom:'20px',paddingTop:'20px'}}>
         <RadioGroup aria-label="gender" name="gender1" value={selectedValue} onChange={handleChangeR}>

            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:'50px',alignItems:'CENTER'}}>
                
                <Grid item md={6} xs={6}>
                        <PlumaRadio
                           
                                value="starter"
                                name="radio-button-demo"
                                
                        />
                        <span>Starter</span>
                </Grid>

                <Grid item md={6} xs={6} style={{display:'flex',flexDirection:'column'}}>
                        
                        <span>- Lorem Ipsum Dolor Sit Amet </span>
                        <span>- Lorem Ipsum Dolor Sit Ametzdazedazd </span>
                        <span>- Lorem Ipsum Dolor Sit Amet </span>
                        <span>- Lorem Ipsum Dolor Sit Ametzdazedazd </span>

                </Grid>
            </div>

            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'CENTER'}}>
                
            <Grid item md={6} xs={6}>
                        <PlumaRadio
                               
                                value="pro"
                                name="radio-button-demo"
                                
                        />
                        <span>Pro</span>
                </Grid>


                <Grid item md={6} xs={6} style={{display:'flex',flexDirection:'column'}}>                        
                        <span>- Lorem Ipsum Dolor Sit Amet </span>
                        <span>- Lorem Ipsum Dolor Sit Ametzdazedazd </span>
                        <span>- Lorem Ipsum Dolor Sit Amet </span>
                        <span>- Lorem Ipsum Dolor Sit Ametzdazedazd </span>

                </Grid>
            </div>
            </RadioGroup>
         </section>
        
         <section style={{display:'flex',paddingTop:'30px',paddingLeft:'10px'}}>

    

            <Grid item md={6} xs={6} style={{display:'flex',flexDirection:'column'}}>
                <span style={{color:'#6A7BFF',fontSize:'15px',marginBottom:'10px'}}>Word Credits</span>
              <Select
              fullWidth
                    style={{width:'90%',margin:'0px'}}
                    value={words}
                    onChange={handleChangeSC}
                 >
            
                <MenuItem  style={{color:'white',textTransform:'capitalize'}} value={30}>30,0000</MenuItem>
                <MenuItem  style={{color:'white',textTransform:'capitalize'}} value={50}>50,0000</MenuItem>
                <MenuItem  style={{color:'white',textTransform:'capitalize'}} value={90}>90,0000</MenuItem>
                
            
        </Select>
        <span style={{color:'#C4C4C4',fontSize:'12px',paddingTop:'8px'}}>Total words generated by Pluma.ai</span>

        </Grid>
        <Grid item md={6} xs={12} style={{display:'flex',flexDirection:'column'}}>
                <span  style={{color:'#6A7BFF',fontSize:'15px',marginBottom:'10px'}}>Team Mmebers</span>
              <Select

                    style={{width:'90%',margin:'0px'}}
                    value={members}
                    onChange={handleChangeSM}
                 >
            
                <MenuItem  style={{color:'white',textTransform:'capitalize'}} value={2}>2</MenuItem>
                <MenuItem  style={{color:'white',textTransform:'capitalize'}} value={5}>5</MenuItem>
                <MenuItem  style={{color:'white',textTransform:'capitalize'}} value={9}>9</MenuItem>
                
            
        </Select>
        <span style={{color:'#C4C4C4',fontSize:'12px',paddingTop:'8px'}}>Add or remove users under team settings</span>
        </Grid>
       
              </section>
              <Grid item md={12} xs={12} style={{marginTop:'20px',padding:'10px'}}>
        <span  style={{color:'#6A7BFF',fontSize:'15px'}}>Summary</span>
        <Divider  style={{marginTop:'20px',background:'#D9DDFB'}}/>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:'50px',alignItems:'CENTER',marginTop:'25px'}}>
            <span style={{fontSize:'15px'}}>New Plan Total</span>
            <span style={{fontSize:'15px'}}>$59/Mo</span>
        </div>

        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:'50px',alignItems:'CENTER',marginTop:'25px'}}>
            <span className='boldText' style={{fontSize:'15px'}}>Due Today</span>
            <span className='boldText' style={{fontSize:'15px'}}>$0/Mo</span>
        </div>
        <Button style={{background:'#6A7BFF',color:'white',borderRadius:'20px'}} fullWidth>confirm changes</Button>

        </Grid>
      </Grid>
    )
}

export default Billing