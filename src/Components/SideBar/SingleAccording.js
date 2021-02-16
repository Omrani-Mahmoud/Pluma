import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import SideMenuButton from './SideMenuButton';

const Accordion = withStyles({
    root: {
      border: '1px solid rgb(243,243,243)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'white',
  
      marginBottom: -0,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '0px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
  
    },
  }))(MuiAccordionDetails);
function SingleAccording({expanded,handleChange,name,content,activePath,setter}) {


    const accordStyle={
        width:'100%',
        textAlign:'center',
        color:expanded === name?'white':'#202020',
        transition: 'color .5s'
    }

    const summuryStyle={       
        background:expanded === name?'#6A7BFF':'white',
        transition: 'background .5s',
    
    }

    return (
        <Accordion square expanded={expanded === name} onChange={handleChange(name)} style={{borderLeft:'none',borderRight:'none',borderTop:'1px solid rgb(243,243,243)'}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon  style={{color:expanded === name?'white':'#6A7BFF'}}/>} style={summuryStyle}> 
        <section style={accordStyle}>
          <span style={{fontWeight:'lighter',fontSize:'15px'}}>{content.name}</span>
        </section>
        </AccordionSummary>
        <AccordionDetails style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            {
                 content.options && 
                content.options.map(btn=>{
                    return <SideMenuButton value={btn} activePath={activePath} setter={setter}/>
                })
            }
           

        </AccordionDetails>
 
      </Accordion>
    )
}

export default SingleAccording
