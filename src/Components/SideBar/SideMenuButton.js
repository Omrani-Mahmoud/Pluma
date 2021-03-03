import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import {useLocation} from "react-router-dom";
import {RecoilRoot,atom,selector,useRecoilState,useRecoilValue,} from "recoil";
import {resultsState} from '../../Atoms/Atoms'
function SideMenuButton({value,activePath,setter}) {

    const [results,setResults] = useRecoilState(resultsState);



    return (
        <Link style={{textDecoration:'none',marginBottom:'13px'}} to={`/home${value.link}`} onClick={()=>{setter(value.link);setResults({...results,display:false})}}>
            
        <motion.span whileHover={{color:'#6A7BFF'}}  style={{cursor:'pointer',color:activePath===value.link?'#6A7BFF':'#c4c4c4',padding:'5px'}}>{value.name}</motion.span>
        </Link>

    )

  
}

export default SideMenuButton
