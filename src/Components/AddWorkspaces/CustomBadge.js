import React from 'react'
import {ReactComponent as BadgeIcon} from '../../Assets/Icons/svg/fi-rs-badge.svg';
 
function CustomBadge() {
    return (
        <div style={{width:'52px',height:'23px',background:'#6A7BFF',marginLeft:'-20px',justifyContent:'flex-end',alignItems:'center',display:'flex',flexDirection:'row',marginRight:'10px'}}>
            <span style={{float:'right',marginRight:'5px'}}><BadgeIcon style={{fill:'white',width:'12px',height:'18px',marginTop:'4px'}} /></span>
        </div>
    )
}

export default CustomBadge
