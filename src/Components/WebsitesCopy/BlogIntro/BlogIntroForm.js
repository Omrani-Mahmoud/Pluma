import { Button, Grid, TextareaAutosize, TextField } from '@material-ui/core'
import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import '../../../Assets/Css/ProductForm.css'
import CustomInput from './CustomInput';
import CustomTextArea from './CustomTextArea.js';


const initValue = {
    prod_name:'',
    desc:'',
    target:'',
    occasion:'',
    promotion:''
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
    
        default:
            return state;
    }
}

function BlogIntroForm() {
    const [formValue, dispatch] = React.useReducer(reducer, initValue);
    const [checked, setchecked] = React.useState(false);
    const handleChange = (event) => {
        setchecked(event.target.checked);
      };
    return (
        <Grid item md={12} xs ={12} style={{padding:'20px'}}>
                <section style={{background:'rgb(217,221,251)',padding:'10px',textAlign:'center'}}>
                    <span className='boldText' style={{textTransform:'uppercase',fontSize:'30px'}}>Blog Introduction</span>
                </section>
               <div style={{background:'white',marginTop:'30px',padding:'20px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
              <CustomInput name='product name' placeholder='product name' action={dispatch} type='prod_name' />

              <CustomTextArea action={dispatch} type='desc'/>
            
                {/* <input type="checkbox" id="scales" name="scales"
                        checked={checked} onChange={handleChange} />
                <label for="scales">More options</label> */}
                
                <Button
                    style={{background:'#6A7BFF',color:'white',marginTop:'20px',borderRadius:'0px'}}
                    fullWidth
                    variant="contained"
                    onClick={()=>console.log('hahahahahahahahah',formValue)}
                    >
                  Create
                </Button>
               </div>
        </Grid>
    )
}

export default BlogIntroForm
