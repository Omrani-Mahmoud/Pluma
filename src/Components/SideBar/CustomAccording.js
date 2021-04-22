import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SingleAccording from './SingleAccording';
import {expandedSectionState} from '../../Atoms/Atoms'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";


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

const CustomAccording = (props,ref)=> {
  const [expanded, setExpanded] = useRecoilState(expandedSectionState)
  const [activePath, setactivePath] = React.useState('')




  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : '');
  };

  const activePathSetter = (path)=>{
    setactivePath(path);
    window.localStorage.setItem('activePath',path)
  }

  return (
    <div>
      <SingleAccording expanded={expanded} handleChange={handleChange} name='panel1' content={{name:'Email & letters',options:[{name:'Email Headlines',link:'/emailheadlines'}]}} activePath={activePath} setter={activePathSetter} />

      <SingleAccording expanded={expanded} handleChange={handleChange} name='panel2' content={{name:'Products',options:[{name:'Product Descriptions',link:'/product_description'}]}} activePath={activePath} setter={activePathSetter}/>

      <SingleAccording expanded={expanded} handleChange={handleChange} name='panel3' content={{name:'Social ADS',options:[{name:'Facebook Headlines',link:'/facebookheadlines'},{name:'Facebook Link Desc..',link:'/facebooklinkdesc'},{name:'Facebook Primary Text',link:'/facebookprimarytext'},{name:'Google Description',link:'/googledescription'},{name:'Google Headlines',link:'/googleheadlines'},{name:'Instagram Captions',link:'/instagramCaption'}]}} activePath={activePath} setter={activePathSetter}/>

      <SingleAccording expanded={expanded} handleChange={handleChange} name='panel4' content={{name:'Sales Copy',options:[{name:'AIDA',link:'/aida'},{name:'Before After Bridge',link:'/bab'},{name:'Emotional Angles',link:'/emotionalAngles'},{name:'Feature Advantage Benefit',link:'/featureAdvantageBenefit'},{name:'Feature To Benefit',link:'/featureToBenefits'},{name:'Functional Benefit',link:'/functionalBenifit'},{name:'Marketing Angles',link:'/marketingAngles'},{name:'Pain Agitate Solution',link:'/PASolution'},{name:'Problem Promise Proof',link:'/Ppp'}]}} activePath={activePath} setter={activePathSetter}/>
      
      <SingleAccording expanded={expanded} handleChange={handleChange} name='panel5' content={{name:'Websites Copy',options:[{name:'Blog Introduction',link:'/blogIntro'},{name:'Listicles',link:'/listicles'},{name:'Content Improver',link:'/contentImprover'},{name:'Sentence Expander',link:'/sentenceExpander'}]}} activePath={activePath} setter={activePathSetter} />
      
      <SingleAccording expanded={expanded} handleChange={handleChange} name='panel6' content={{name:'Brainstorming',options:[{name:'Value Proposition',link:'/valueProposition'}]}} activePath={activePath} setter={activePathSetter} />

      <SingleAccording expanded={expanded} handleChange={handleChange} name='panel7' content={{name:'SEO',options:[{name:'Blog Post',link:'/blogPost'},{name:'Home Page',link:'/homePage'},{name:'Product Page',link:'/productPage'},{name:'Services Page',link:'/servicesPage'}]}} activePath={activePath} setter={activePathSetter} />

    </div>
  );
}

export default CustomAccording
