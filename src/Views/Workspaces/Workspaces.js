import React from 'react'
import { Button, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import SingleRow from '../../Components/AddWorkspaces/SingleRow';
import {activeWorkspace} from '../../Selectors/WorkspaceSelector';
import {workSpaceState} from '../../Atoms/Atoms'

import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import NewWorkSpace from '../../Components/AddWorkspaces/NewWorkSpace';
import Empty from './Empty';
const useStyles = makeStyles({
    table: {
      minWidth: 350,
    },
    header:{
        fontWeight:'bold'
    }
  });
function Workspaces({addWorkspace}) {
    const [workspaces, setWorkSpaces] = useRecoilState(workSpaceState);
    const activeSpacework = useRecoilValue(activeWorkspace);
    const [isNew, setIsNew] = React.useState(false)

    const push_new = (value)=>{
        setWorkSpaces((oldList)=>[
            ...oldList,{
                name:value,
                is_active:false
            },
        ]);
        setIsNew(false);
    }
    return (
        <Container>
        <Grid item md={12} xs ={12} style={{padding:'20px'}}>
            <section style={{background:'rgb(217,221,251)',padding:'10px',width:'50%',marginBottom:'30px',borderRadius:'10px'}}>
                <span className='boldText' style={{textTransform:'uppercase',fontSize:'30px',marginLeft:'14px'}}>ADD WORKSPACE</span>
            </section>
            <div style={{background:'white',padding:'20px',borderRadius:'10px'}}>
            
            {
                    workspaces.length===0 &&
                    <Empty isNewSetter={setIsNew}/>
            }
            {
                workspaces.map(elem=>{
                    
                    return <SingleRow workspace={elem}/>
                })
            }
            {
                isNew && 
                <NewWorkSpace addWorkspace={addWorkspace} isNewSetter={setIsNew}  /> // push_new={push_new}
            }
                
            </div>
            <Button variant="contained" style={{background:'#6A7BFF',borderRadius:'20px',color:'white',fontWeight:'bold',float:'right',marginTop:'10PX'}} disableElevation	onClick={()=>setIsNew(true)}>
                    ADD NEW WORKSPACE
                </Button>
            
        </Grid>
    </Container>
)
}

export default Workspaces
