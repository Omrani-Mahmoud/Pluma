import React from 'react'
import {ReactComponent as Bell} from '../../Assets/Icons/svg/fi-rs-bell.svg';

function Empty({isNewSetter}) {
    return (

        <span style={{border:'2px solid rgb(180,226,253)',padding:'15px',color:'#202020',fontWeight:'bold',background:'rgb(231,247,255)',borderRadius:'5px',display:'flex',alignItems:'center',fontSize:'13px'}}><Bell style={{width:16,height:12,fill:'white',marginRight:'10px',fill:'rgb(37,147,252)'}} />
        No workspaces found ...
        <span style={{marginLeft:'10px', color:'rgb(37,147,252)',cursor:'pointer'}} href='/home/workspaces' onClick={()=>isNewSetter(true)}>Create one here !</span>
        </span>

    )
}

export default Empty
