import React from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import Chip from '@material-ui/core/Chip';
import {ReactComponent as Cross} from '../../../../Assets/Icons/svg/fi-rs-cross-small.svg';

function CustomLI({handleDelete,keyword,classes}) {
    const [mouseIn, setmouseIn] = React.useState(false)

    return (
        <li key={keyword} onMouseEnter={()=>setmouseIn(true)} onMouseLeave={()=>setmouseIn(false)}>
        <Chip
        deleteIcon={<Cross  style={{width:'18px',height:'18px',fill:!mouseIn?'#6A7BFF':'#EEE9FE'}}/>}
        label={keyword}
        onDelete={handleDelete(keyword)}
        className={classes.chip}
        style={ !mouseIn?{ background:'#EEE9FE',
        color:'#6A7BFF',
        fontSize:'15px', paddingLeft:'7px',
        paddingRight:'7px',}:
        {
          background:'#6A7BFF',
          color:'#EEE9FE',
          fontSize:'15px',
          paddingLeft:'7px',
          paddingRight:'7px',
         
        }}
        />
    </li>
    )
}

export default CustomLI
