import { Container, Grid } from '@material-ui/core'
import React from 'react'
import SingleFav from '../../Components/Favorite/SingleFav'

function Favorite({data}) {
    return (
       <Container>
            <Grid item md={12} xs ={12} style={{padding:'20px'}}>
                <section style={{background:'rgb(217,221,251)',padding:'10px',width:'48%',marginBottom:'30px'}}>
                    <span className='boldText' style={{textTransform:'uppercase',fontSize:'30px',marginLeft:'14px'}}>FAVORITE LIST</span>
                </section>
                <div style={{display:'flex',flexDirection:'row',height:'100%',width:'100%',flexWrap:'wrap'}}>
                    {
                        data.map((elem,index)=>{
                            return <SingleFav content={elem.content} index={index}/>
                        })
                    }
                </div>
            </Grid>
        </Container>
    )
}

export default Favorite
