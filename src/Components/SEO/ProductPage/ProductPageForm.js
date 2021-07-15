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
import MultiInputs from '../Shared/custom Multiinputs/MultiInputs';
import {getToken} from '../../../Selectors/TokenSelector'
import CustomSnackbar from "../../../Components/SnackBars/CustomSnackBar";

const initValue = {
    prod_name:'',
    desc:'',
    target:'',
    occasion:'',
    promotion:'',
    title:'',
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
                                case 'title':
                                    return{...state,title:action.value};
                                    case 'keywords':
                                        {
                                            let old = state.keywords;
                                            old.push(action.value);
                                            return {...state,keywords:old};
                                        }
                                        case 'removeKeyword':
                                            {
                                                let filtred = state.keywords;
                                                filtred = filtred.filter(elem=>{
                                                    return elem!==action.value
                                                });
                                                return {...state,keywords:filtred};
                                            }
    
        default:
            return state;
    }
}

function ProductPageForm({languages}) {
    const [loading, setloading] = React.useState(false)
    const [formValue, dispatch] = React.useReducer(reducer, initValue);
    const [checked, setchecked] = React.useState(false);
    const [results,setResults] = useRecoilState(resultsState);
    const authToken = useRecoilValue(getToken);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setchecked(event.target.checked);
      };

      const checkInputs =()=>{
  
        if(formValue.prod_name?.length<=0)
            return  true
            if(formValue.desc?.length<=0)
               return  true
                    if(formValue.keywords?.length<=0)
                       return  true
        
  }

    const _getResults = ()=>{
        const isError = checkInputs();
        if(isError){
            setOpen(true)
        }
        else{
        setloading(true);
        let keywords_strings = '';
        formValue.keywords.map(keyword =>{
            keywords_strings=keyword+',';
        })
        let body = {
            inp:languages.input,
            prod_name:formValue.prod_name,
            description:formValue.desc,
            keyword:keywords_strings
        };

        let req = `${languages.input}/${formValue.prod_name}/${formValue.desc}/${keywords_strings}`
        
        // if(formValue.target.length>0)
        //     req = `${req}/${formValue.target}`

        // if(formValue.occasion.length>0)
        //     req =`${req}/${formValue.occasion}`
        
        // if(formValue.promotion.length>0)
        //     req =`${req}/${formValue.promotion}`

        // if(formValue.target.length>0)
        //     body = {...body,target:formValue.target}

        // if(formValue.occasion.length>0)
        //     body = {...body,occasion:formValue.occasion}
        
        // if(formValue.promotion.length>0)
        //     body = {...body,promotion:formValue.promotion}

            window.localStorage.setItem('oldInputs',JSON.stringify(formValue))

        axios.post(`${uri.link}/seo_prod/${req}`,body,{headers: 
            {Authorization: 'Bearer ' + authToken}
         })
          .then(function (response) {
           
            setloading(false);
            // setResults({...results,});
            if(response.data.length>0){
                setResults({...results,data:response.data,display:true});
            }
            window.localStorage.setItem('oldInputs',JSON.stringify(formValue))

          })
          .catch(function (error) {
              setloading(false)
            console.log(error);
          });
        }
    }

        
        React.useEffect(() => {
            if(window.localStorage.getItem('oldInputs')){
                const inputs = JSON.parse(window.localStorage.getItem('oldInputs'))
                dispatch({type:'reset',value:{
                    prod_name:inputs.prod_name,
                    desc:inputs.desc,
                    target:'',
                    occasion:'',
                    promotion:'',
                    title:'',
                    keywords:inputs.keywords?inputs.keywords:[]
                }})
            }
            else{
                dispatch({type:'reset',value:{
                    prod_name:'',
                    desc:'',
                    target:'',
                    occasion:'',
                    promotion:'',
                    title:'',
                    keywords:[]
                }})
             }
        }, [])


    return (
        <Grid item md={12} xs ={12} style={{padding:'20px'}}>
             <CustomSnackbar
                    setter={setOpen}
                    open={open}
                    content="Ops, all inputs are required !"
                    type="error"
                />
                <section style={{background:'rgb(217,221,251)',padding:'10px',textAlign:'center',borderRadius:'10px'}}>
                    <span className='boldText' style={{textTransform:'uppercase',fontSize:'30px'}}>Product Page</span>
                </section>
               <div style={{background:'white',marginTop:'30px',padding:'20px',display:'flex',flexDirection:'column',justifyContent:'center',borderRadius:'18px'}}>
              <CustomInput length={20} v={formValue.prod_name} name='product name' placeholder='product name' action={dispatch} type='prod_name' />

              <CustomTextArea length={140} v={formValue.desc} action={dispatch} type='desc'/>
              

                <MultiInputs length={40} action={dispatch} type='keywords' keywords={formValue.keywords} removeType={'removeKeyword'}/>
               {/* <FormControlLabel
                    control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" color='default' size="small" />}
                    label="More options"
                    className='salma'
                    style={{marginTop:'20px',color:'#C4C4C4',marginBottom:'10px'}}
                /> */}
                {/* <input type="checkbox" id="scales" name="scales"
                        checked={checked} onChange={handleChange} />
                <label for="scales">More options</label> */}
                {/* {
                    checked &&
                    <div>
                        <CustomInput name='target audience' placeholder='Ex. digital marketers in Canada' margin={30} v={formValue.target}  action={dispatch} type='target' />

                        <CustomInput name='occasion' placeholder="ex. valentine's Day" margin={30}  action={dispatch} v={formValue.occasion} type='occasion'/>

                        <CustomInput name='promotion' placeholder='ex. 20% off'  margin={30}  action={dispatch} v={formValue.promotion} type='promotion'/>

                    </div>    
                } */}

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

export default ProductPageForm
