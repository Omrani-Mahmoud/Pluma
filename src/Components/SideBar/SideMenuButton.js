import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import {useLocation} from "react-router-dom";
function SideMenuButton({value,activePath,setter}) {


    return (
        <Link style={{textDecoration:'none'}} to={`/home${value.link}`} onClick={()=>setter(value.link)}>
            
        <motion.span whileHover={{color:'#6A7BFF'}}  style={{cursor:'pointer',color:activePath===value.link?'#6A7BFF':'#c4c4c4',padding:'5px'}}>{value.name}</motion.span>
        </Link>

    )

  
}

export default SideMenuButton
