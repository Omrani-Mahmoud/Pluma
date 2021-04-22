import { Grid } from '@material-ui/core'
import React from 'react'
import {expandedSectionState} from '../Atoms/Atoms'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
function HomeCard({elem,panel_id,hoverHandler}) {

    const [expanded, setExpanded] = useRecoilState(expandedSectionState);
    const [hover, sethover] = React.useState(false)
    const title = {
        color:'#6A7BFF',
        fontSize:'25px',
        textTransform:'uppercase'
    }
    const pstyle = {
        fontSize:'15px'
    }

    const activeSectionHandler = ()=>{
        hoverHandler();
        setExpanded(`panel${panel_id}`);
    }
    const hover_in_Handler = (v)=>{
        sethover(v)
    }


    const cardStyle={
        filter:hover?'drop-shadow(0 0 0.35rem #b5bdf5)':null,
        transition:'0.5s',
        cursor:'pointer',
        border:hover?'1px solid white':'1px solid #6A7BFF',
        maxWidth:'320px',
        marginRight:'7px',
        marginLeft:'7px',
        marginBottom:'14px',
        marginTop:'14px',
        padding:'45px 15px 45px 15px',
        background:'white',
        height:'287px',
        borderRadius:'10px'
    }
    return (
        <Grid onMouseEnter={()=>hover_in_Handler(true)} onMouseLeave={()=>hover_in_Handler(false)}  onClick={activeSectionHandler}  item  md={3} style={cardStyle}>
            <span className='boldText' style={title}>{elem.name}</span>
           {
               elem.description?
               <p>{elem.description}</p>
               :
               <p style={pstyle}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras semper auctor neque vitae.
</p>
           }
        </Grid>
    )
}

export default HomeCard
