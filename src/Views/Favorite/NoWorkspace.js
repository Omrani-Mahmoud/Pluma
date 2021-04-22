import React from 'react'
import {ReactComponent as Bell} from '../../Assets/Icons/svg/fi-rs-bell.svg';

function NoWorkspace() {
    return (

        <span style={{width:'100%',border:'2px solid rgb(254,236,180)',padding:'15px',color:'#202020',fontWeight:'bold',background:'rgb(255,251,231)',borderRadius:'5px',display:'flex',alignItems:'center',fontSize:'13px'}}><Bell style={{width:16,height:12,fill:'white',marginRight:'10px',fill:'#ff6700'}} />
        There is no workspace specified yet !
        <a style={{marginLeft:'10px', color:'#202020'}} href='/home/workspaces'>click here</a>
        </span>

    )
}

export default NoWorkspace
