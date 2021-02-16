import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SingleAccording from './SingleAccording';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
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
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),

  },
}))(MuiAccordionDetails);

export default function CustomAccording() {
  const [expanded, setExpanded] = React.useState('');
  const [activePath, setactivePath] = React.useState('')
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <SingleAccording expanded={expanded} handleChange={handleChange} name='panel1' content={{name:'Email & letters',options:[{name:'Test',link:'/fafa'}]}} activePath={activePath} setter={setactivePath} />

      <SingleAccording expanded={expanded} handleChange={handleChange} name='panel2' content={{name:'Products',options:[{name:'Product Descriptions',link:'/product_description'}]}} activePath={activePath} setter={setactivePath}/>

      <SingleAccording expanded={expanded} handleChange={handleChange} name='panel3' content={{name:'Social ADS',options:[{name:'Test',link:'/home'}]}} activePath={activePath} setter={setactivePath}/>

    </div>
  );
}
