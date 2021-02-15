import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import {userState} from '../Atoms/Atoms'


export const updateUser = selector({
  key:'updateUser',
  get:({get})=>{
    const user = get(userState);
    return window.localStorage.getItem('erpT') 
  }
})