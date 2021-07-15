import { Grid, Modal } from '@material-ui/core';
import React from 'react'
 import {ReactComponent as ShoppingCart} from '../../Assets/Icons/svg/fi-rs-shopping-cart.svg';
 import {ReactComponent as Eye} from '../../Assets/Icons/svg/fi-rs-eye.svg';
 import {ReactComponent as Trash} from '../../Assets/Icons/svg/fi-rs-trash.svg';
import Billing from './Billing';
import Invoices from './Invoices';

function Plans() {

    const [open, setOpen] = React.useState(false);
    const [modal, setmodal] = React.useState({invoices:false,billing:false});

    const handleOpen = (type) => {
       
        if(type==='billing'){
            setmodal({billing:true,invoices:false})
        }
        if(type==='invoices'){
            setmodal({billing:false,invoices:true})
        }
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    const title = {
        color:'#6A7BFF',
        fontSize:'20px',
       
    }
    const pstyle = {
        fontSize:'15px',
        color:'#8F8F8F',
        paddingTop:'10px'
    }
    const cardStyle={
        transition:'0.5s',
       
        border:'1px solid #6A7BFF',
        marginRight:'7px',
        marginLeft:'7px',
        marginBottom:'14px',
        marginTop:'14px',
        padding:'10px 15px 45px 15px',
        background:'white',
        height:'200px',
        borderRadius:'10px',
        display:'flex',
        flexDirection:'column'
    }
    return (
        <Grid md={12} xs={12} style={{padding:'5px',display:'flex',flexDirection:'row',justifyContent:'space-around',marginRight:'0px'}}>
            
            <Grid  item  md={4} style={cardStyle}>
                <section style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
                    <span style={{background:'#EBEDFC',color:'#6A7BFF',width:'65px',height:'19px',textAlign:'center'}}>Active</span>
                    <span onClick={()=>handleOpen('billing')} style={{ cursor:'pointer',display:'flex',width:'35px',height:'35px',justifyContent:'flex-end',alignItems:'center',background:'#D9DDFB',textAlign:'center',borderRadius:'5px'}}><ShoppingCart  style={{  width:15,height:15,fill:'white',marginRight:'10px',fill:'#6A7BFF'}}/></span>
                </section>
                <span  style={title}>30,0000 Word Credits</span>
                <span  style={pstyle}>next billing on may 15,2021</span>
            </Grid>

            <Grid  item  md={4} style={cardStyle}>
                <section style={{display:'flex',width:'100%',justifyContent:'flex-end'}}>
                    <span onClick={()=>handleOpen('invoices')} style={{ cursor:'pointer',display:'flex',width:'35px',height:'35px',justifyContent:'flex-end',alignItems:'center',background:'#D9DDFB',textAlign:'center',borderRadius:'5px'}}><Eye  style={{ width:15,height:15,fill:'white',marginRight:'10px',fill:'#6A7BFF'}}/></span>
                </section>
                <span  style={title}>Invoices</span>
                <span  style={pstyle}>View Your Payment History</span>
            </Grid>

            <Grid  item  md={4} style={cardStyle}>
                <section style={{display:'flex',width:'100%',justifyContent:'flex-end'}}>
                    <span style={{ cursor:'pointer',display:'flex',width:'35px',height:'35px',justifyContent:'flex-end',alignItems:'center',background:'#D9DDFB',textAlign:'center',borderRadius:'5px'}}><Trash   style={{ width:15,height:15,fill:'white',marginRight:'10px',fill:'#6A7BFF'}}/></span>
                </section>
                <span  style={title}>Cancel Account</span>
                <span  style={pstyle}>Please be aware that cancelling your account will lose all your saved content and earned credits on your account.</span>
            </Grid>

            { modal.billing && 
            <Modal
                open={open}
                onClose={handleClose}
                style={{display:'flex',justifyContent:'center',alignItems:'center'}}
            >
                <Billing handleClose={handleClose} /> 
              
        
            
</Modal>
}

{ modal.invoices &&
            <Modal
                open={open}
                onClose={handleClose}
                style={{display:'flex',justifyContent:'center',alignItems:'center'}}
            >
              <Invoices handleClose={handleClose} />
              
        
            
</Modal>
}


       </Grid>
    )
}

export default Plans
