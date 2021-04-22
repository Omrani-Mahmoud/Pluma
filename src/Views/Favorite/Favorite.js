import { Container, Grid } from '@material-ui/core'
import React from 'react'
import SingleFav from '../../Components/Favorite/SingleFav'
import NoFavorites from './NoFavorites'
import NoWorkspace from './NoWorkspace'

function Favorite({data,list,currentWorkspace}) {
    return (
       <Container>
            <Grid item md={12} xs ={12} style={{padding:'20px'}}>
                <section style={{background:'rgb(217,221,251)',padding:'10px',width:'48%',marginBottom:'30px',borderRadius:'10px'}}>
                    <span className='boldText' style={{textTransform:'uppercase',fontSize:'30px',marginLeft:'14px'}}>FAVORITE LIST</span>
                </section>
                {
                    currentWorkspace && 
                    <div style={{display:'flex',flexDirection:'row',height:'100%',width:'100%',flexWrap:'wrap'}}>
                    
                    {
                        data.length>0 ?
                            data.map((elem,index)=>{
                            return <SingleFav content={elem.content} index={index} id={elem.id}/>
                        })
                        :
                        <>
                            <NoFavorites />
                        </>                  }
                </div>
                }
                {
                        !currentWorkspace && 
                        <NoWorkspace />

                }
                
            </Grid>
        </Container>
    )
}

export default Favorite
