import { Container } from '@material-ui/core'
import React from 'react'
import Favorite from './Favorite'
import {useRecoilState,useRecoilValue,} from "recoil";
import { tokenState,favoritesState } from "../../Atoms/Atoms";
import {getToken} from '../../Selectors/TokenSelector'
import {activeWorkspaceFavorites} from '../../Selectors/FavoritesSelector'
import {activeWorkspace} from '../../Selectors/WorkspaceSelector'

function FavoriteContainer() {


    const currentWorkspace= useRecoilValue(activeWorkspace);
    const authToken = useRecoilValue(getToken);
    const favoriteList = useRecoilValue(activeWorkspaceFavorites(currentWorkspace.id));

    const [_token, _setToken] = useRecoilState(tokenState);
    const [_favorites, _setFavorites] = useRecoilState(favoritesState);

console.log('fav list',favoriteList)




    return (
        <Favorite data={favoriteList} />
    )
}

export default FavoriteContainer
