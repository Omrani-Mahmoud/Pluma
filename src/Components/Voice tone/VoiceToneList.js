import React from 'react'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from "recoil";
import { getTones,getActiveTone } from "../../Selectors/TonesSelector";
import {voiceToneState} from '../../Atoms/Atoms'
import Select from '@material-ui/core/Select';
import { Grid } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

function VoiceToneList() {
    const [_tonesState, _setonesState] = useRecoilState(voiceToneState);
    const tones = useRecoilValue(getTones);
    const activeTone = useRecoilValue(getActiveTone);


    const handleChange = (value)=>{
        let wrong = [];
        _tonesState.map(tone=>{
          if(tone.type!==value){
                wrong.push(_tonesState.indexOf(tone))
          }
      })
    const elementIndex =_tonesState.findIndex(tone => tone.type === value );
    let newArray = [..._tonesState];
    newArray[elementIndex] = {...newArray[elementIndex], isActive: true};
    wrong.map(i=>{
        newArray[i] = {...newArray[i], isActive: false};
    })
    _setonesState(newArray)
    };
    
    return (
        <Grid item md={12} xs={12} style={{display:'flex',flexDirection:'column',marginTop:'35px'}}>
        <span style={{fontSize:'18px',textTransform:'capitalize'}}>Voice tone</span>
        <Select
          style={{marginTop:'10px'}}
          value={activeTone.type}
          onChange={(e)=>handleChange(e.target.value)}
        >
            {
                    tones.map(tone =>{
                        return <MenuItem  style={{color:'white',textTransform:'capitalize'}} value={tone.type}>{tone.type}</MenuItem>
                    })
            }
        </Select>

        </Grid>
    )
}

export default VoiceToneList
