import React from 'react'
import {Route,Redirect} from "react-router-dom"
import auth from './Auth'

 const  ProtectedRoute =({component:Component, ...rest}) =>{

    console.log('AUTH:::::', auth.isAuthenticated())
    return (
        <Route  {...rest} render={
            (props)=>{
                console.log('zebii',auth.isAuthenticated());
                if(auth.isAuthenticated())
                    return <Component {...props}/>
                else{
                    return <Redirect to={{
                        pathname:"/",
                        state:{
                            from:props.location
                        }

                    }} />
                }
            }
        }/>
    )
}


export default React.memo(ProtectedRoute)