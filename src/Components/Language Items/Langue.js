import { MenuItem } from '@material-ui/core'
import React from 'react'

function Langue({lang,activeLangue,handler}) {

  

    return (
        <MenuItem style={{width:'150px',textAlign:'center',fontSize:'13px',color:'white',display:"flex",justifyContent:'center'}} onClick={()=>handler(lang)}>
            <span style={{opacity:lang!==activeLangue?'40%':'100%'}}>{lang}</span>
        </MenuItem>
    )
}

export default Langue
