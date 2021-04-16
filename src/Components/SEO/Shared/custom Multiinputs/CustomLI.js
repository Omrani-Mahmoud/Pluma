import React from 'react'
import ClearIcon from '@material-ui/icons/Clear';
import Chip from '@material-ui/core/Chip';

function CustomLI({handleDelete,keyword,classes}) {
    const [mouseIn, setmouseIn] = React.useState(false)

    return (
        <li key={keyword} onMouseEnter={()=>setmouseIn(true)} onMouseLeave={()=>setmouseIn(false)}>
        <Chip
        deleteIcon={<ClearIcon  fontSize="small"  style={{color:!mouseIn?'#6A7BFF':'#EEE9FE'}}/>}
        label={keyword}
        onDelete={handleDelete(keyword)}
        className={classes.chip}
        style={ !mouseIn?{ background:'#EEE9FE',
        color:'#6A7BFF',
        fontSize:'15px'}:
        {
          background:'#6A7BFF',
          color:'#EEE9FE',
          fontSize:'15px'
        }}
        />
    </li>
    )
}

export default CustomLI
