import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
    selectorFamily
  } from 'recoil';

  import {favoritesState} from '../Atoms/Atoms'



export const activeWorkspaceFavorites = selectorFamily({
    key:'activeWorkspaceFavorites',
    get: worspaceId => ({get})=>{
      console.log('id here',worspaceId)
      const favorites = get(favoritesState);
      console.log('fav here here',favorites)

      let current = favorites.filter(elem=>elem.workspace_id==worspaceId);

        return current

    }
    
  })
