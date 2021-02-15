import { Divider, MenuItem } from '@material-ui/core'
import React from 'react'

function WorkspaceItem({divider,workspace,handler}) {
    return (
  
        <>
            <MenuItem style={{width:'150px',textAlign:'center',fontSize:'13px',display:"flex",justifyContent:'center',color:'white'}} onClick={()=>handler(workspace.name)} >
                {workspace.name}
            </MenuItem>
            {
                divider && 
                <Divider variant="middle" style={{background:'white'}} />
            } 
        </>
    
    )
}

export default WorkspaceItem
