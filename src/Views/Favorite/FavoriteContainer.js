import { Container } from '@material-ui/core'
import React from 'react'
import Favorite from './Favorite'

function FavoriteContainer() {


    const data = [
        { 
            content:'ahahahhahahha hahahhaahah ahhahahhaha hahhaahahahhahahhahah ahhaahahahhahahhaha ahahhahahhahahah haahahahhahahhah ahahha hahhaahahahhahahhahah ahhaahahahhahahhaha ahahhahahhahahah hahhaahahahhahahhahah ahhaahahahhahahhaha ahahhahahhahahah hahhaahahahhahahhahah ahhaahahahhahahhaha ahahhahahhahahah 1'
        },
        {
            content:'hohoohohoh hohoohohoh hohoohohohhohoohohoh hohoohohohhohoohohohhoho ohohohhohoohohoh hohoohoh ohhohoohohohhohoohohoh 2'
        },
        {
            content:'hehehehehehe hehehehehehe heheheheheheheheheh ehehehehehehehehe 3'
        },
        { 
            content:'ahahahhahahha hahahhaahah ahhahahhaha hahhaahahahhahahhahah ahhaahahahhahahhaha hahhaahahahhahahhahahahha ahahahhahahhahahahhaah ahahhahahhahahah haahahahhahahhah ahahha 4'
        },
        {
            content:'hohoohohoh hohoohohoh hohoohohohhohoohohoh hohoohohohhohoohohohhoho ohohohhohoohohoh hohoohoh ohhohoohohohhohoohohoh 5'
        },
        {
            content:'hehehehehehe hehehehehehe heheheheheheheheheh ehehehehehehehehe 6'
        },
        {
            content:'hehehehehehe hehehehehehe heheheheheheheheheh ehehehehehehehehe 7'
        }
    ]


    return (
        <Favorite data={data} />
    )
}

export default FavoriteContainer
