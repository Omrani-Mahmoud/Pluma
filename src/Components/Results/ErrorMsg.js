import React from 'react'
import {ReactComponent as Bell} from '../../Assets/Icons/svg/fi-rs-exclamation.svg';

function ErrorMsg({children}) {
    return (

        <span style={{width:'100%',border:'2px solid #ff0033',padding:'15px',color:'#ff0033',fontWeight:'bold',background:'rgba(255, 0, 51,0.08)',borderRadius:'5px',display:'flex',alignItems:'center',fontSize:'13px'}}><Bell style={{width:15,height:15,fill:'white',marginRight:'10px',fill:'#ff0033'}} />
                {children}
        </span>

    )
}

export default ErrorMsg
