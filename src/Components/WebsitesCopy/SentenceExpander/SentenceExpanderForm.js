import { Button, Grid, TextareaAutosize, TextField } from '@material-ui/core'
import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import '../../../Assets/Css/ProductForm.css'
import CustomInput from './CustomInput';
import CustomTextArea from './CustomTextArea.js';

import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

import {uri} from '../../../Url_base';
import {RecoilRoot,atom,selector,useRecoilState,useRecoilValue,} from "recoil";
import {resultsState} from '../../../Atoms/Atoms'
import { getActiveTone } from "../../../Selectors/TonesSelector";
import VoiceToneList from '../../Voice tone/VoiceToneList';
import {getToken} from '../../../Selectors/TokenSelector'

const initValue = {
    prod_name:'',
    desc:'',
    target:'',
    occasion:'',
    promotion:'',
    keywords:[]
}

const reducer =(state,action)=>{
    switch (action.type) {
        case 'prod_name':
            return{...state,prod_name:action.value};
            case 'desc':
                return{...state,desc:action.value};
                case 'target':
                    return{...state,target:action.value};
                    case 'occasion':
                        return{...state,occasion:action.value};
                        case 'promotion':
                            return{...state,promotion:action.value};
                            case 'reset':
                            return action.value;
    
        default:
            return state;
    }
}

function SentenceExpanderForm({languages}) {
    const [formValue, dispatch] = React.useReducer(reducer, initValue);
    const [checked, setchecked] = React.useState(false);
    const [results,setResults] = useRecoilState(resultsState);
    const [loading, setloading] = React.useState(false)
    const activeTone = useRecoilValue(getActiveTone);
    const authToken = useRecoilValue(getToken);

    const handleChange = (event) => {
        setchecked(event.target.checked);
      };


      const _getResults = ()=>{
        setloading(true);
        let body = {
            inp:languages.input,
            description:formValue.desc,
            tone:activeTone.type

        };

        let req = `${languages.input}/${formValue.desc}/${activeTone.type}`
        
        window.localStorage.setItem('oldInputs',JSON.stringify(formValue))


        axios.post(`${uri.link}/expand/${req}`,body,{headers: 
          {Authorization: 'Bearer ' + authToken}
       }
)
          .then(function (response) {
           
            setloading(false);
            if(response.data.length>0){
              setResults({...results,data:response.data,display:true});
          }

          })
          .catch(function (error) {
              setloading(false)
            console.log(error);
          });
        }




        React.useEffect(() => {
          const inputs = JSON.parse(window.localStorage.getItem('oldInputs'))
          dispatch({type:'reset',value:inputs})
      }, [])

    return (
        <Grid item md={12} xs ={12} style={{padding:'20px'}}>
                <section style={{background:'rgb(217,221,251)',padding:'10px',textAlign:'center'}}>
                    <span className='boldText' style={{textTransform:'uppercase',fontSize:'30px'}}>Sentence Expander</span>
                </section>
               <div style={{background:'white',marginTop:'30px',padding:'20px',display:'flex',flexDirection:'column',justifyContent:'center'}}>

              <CustomTextArea v={formValue.desc} action={dispatch} type='desc'/>
              <VoiceToneList />
                {/* <input type="checkbox" id="scales" name="scales"
                        checked={checked} onChange={handleChange} />
                <label for="scales">More options</label> */}
                
                  {
                    loading ?
                    <CircularProgress size={24} style={{alignSelf:'center',marginTop:'35px'}}/>
                    :
                    <Button
                    style={{background:'#6A7BFF',color:'white',marginTop:'20px',borderRadius:'0px'}}
                    fullWidth
                    variant="contained"
                    onClick={()=>_getResults()}
                    >
                  Create
                </Button>
                }
               </div>
        </Grid>
    )
}

export default SentenceExpanderForm
