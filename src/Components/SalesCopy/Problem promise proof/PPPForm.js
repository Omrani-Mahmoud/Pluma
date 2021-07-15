import { Button, Grid, TextareaAutosize, TextField } from '@material-ui/core'
import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import '../../../Assets/Css/ProductForm.css'
import CustomInput from './CustomInput';
import CustomTextArea from './CustomTextArea.js';


import axios from 'axios'
import {uri} from '../../../Url_base';
import {RecoilRoot,atom,selector,useRecoilState,useRecoilValue,} from "recoil";
import {resultsState} from '../../../Atoms/Atoms'
import CircularProgress from '@material-ui/core/CircularProgress';
import { getActiveTone } from "../../../Selectors/TonesSelector";
import VoiceToneList from '../../Voice tone/VoiceToneList';
import {getToken} from '../../../Selectors/TokenSelector'
import CustomSnackbar from "../../../Components/SnackBars/CustomSnackBar";

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

function PPPForm({languages}) {
    const [formValue, dispatch] = React.useReducer(reducer, initValue);
    const [checked, setchecked] = React.useState(false);
    const [results,setResults] = useRecoilState(resultsState);
    const [loading, setloading] = React.useState(false)
    const activeTone = useRecoilValue(getActiveTone);
    const authToken = useRecoilValue(getToken);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setchecked(event.target.checked);
      };

      const _getResults = ()=>{
          if(formValue.prod_name.length>0){
        setloading(true);
        let body = {
            inp:languages.input,
            prod_name:formValue.prod_name,
            description:formValue.desc,
            tone:activeTone.type

        };

        let req = `${languages.input}/${formValue.prod_name}/${formValue.desc}/${activeTone.type}`
        
        if(formValue.target.length>0)
            req = `${req}/${formValue.target}`

        if(formValue.occasion.length>0)
            req =`${req}/${formValue.occasion}`
        
        if(formValue.promotion.length>0)
            req =`${req}/${formValue.promotion}`

        if(formValue.target.length>0)
            body = {...body,target:formValue.target}

        if(formValue.occasion.length>0)
            body = {...body,occasion:formValue.occasion}
        
        if(formValue.promotion.length>0)
            body = {...body,promotion:formValue.promotion}

            window.localStorage.setItem('oldInputs',JSON.stringify(formValue))

        axios.post(`${uri.link}/prob/${req}`,body,{headers: 
            {Authorization: 'Bearer ' + authToken}
         })
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
        else{
            setOpen(true)
        }
    }

        React.useEffect(() => {
            const inputs = JSON.parse(window.localStorage.getItem('oldInputs'))
            dispatch({type:'reset',value:inputs})
        }, [])

    return (
        <Grid item md={12} xs ={12} style={{padding:'20px'}}>
            <CustomSnackbar
                    setter={setOpen}
                    open={open}
                    content="Ops, product name is required !"
                    type="error"
                />
                <section style={{background:'rgb(217,221,251)',padding:'10px',textAlign:'center',borderRadius:'10px'}}>
                    <span className='boldText' style={{textTransform:'uppercase',fontSize:'30px'}}>Problem Promise Proof</span>
                </section>
               <div style={{background:'white',marginTop:'30px',padding:'20px',display:'flex',flexDirection:'column',justifyContent:'center',borderRadius:'18px'}}>
              <CustomInput length={20} v={formValue.prod_name} name='product name' placeholder='product name' action={dispatch} type='prod_name' />

              <CustomTextArea length={140} v={formValue.desc} action={dispatch} type='desc'/>
              <VoiceToneList />
               <FormControlLabel
                    control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" color='default' size="small" />}
                    label="More options"
                    className='salma'
                    style={{marginTop:'20px',color:'#C4C4C4',marginBottom:'10px'}}
                />
                {/* <input type="checkbox" id="scales" name="scales"
                        checked={checked} onChange={handleChange} />
                <label for="scales">More options</label> */}
                {
                    checked &&
                    <div>
                        <CustomInput length={20} v={formValue.target} name='target audience' placeholder='Ex. digital marketers in Canada' margin={30}  action={dispatch} type='target' />

                        <CustomInput length={20} v={formValue.occasion} name='occasion' placeholder="ex. valentine's Day" margin={30}  action={dispatch} type='occasion'/>

                        <CustomInput length={5} v={formValue.promotion} name='promotion' placeholder='ex. 20% off'  margin={30}  action={dispatch} type='promotion'/>

                    </div>    
                }
              {
                    loading ?
                    <CircularProgress size={24} style={{alignSelf:'center',marginTop:'35px'}}/>
                    :
                    <Button
                    style={{background:'#6A7BFF',color:'white',marginTop:'20px',borderRadius:'0px',borderRadius:'20px'}}
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

export default PPPForm
