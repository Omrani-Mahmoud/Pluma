import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import jwt from 'jsonwebtoken'
import {getToken} from '../Selectors/TokenSelector'

let t= window.localStorage.getItem('plumaT');

console.log('TTT',t)
  export const userState = atom({
    key: 'userState',
    default: {fullname:'mahmoud Omrani',email:'omrani@omrani.com',plan:'Lifetime'},
  });

  export const tokenState = atom({
    key: 'tokenState',
    default: {token:t},
  });



  export const workSpaceState = atom({
    key: 'workSpaceState',
    default:t !== null ?jwt.decode(t).workspaces:[]

  });

  export const favoritesState = atom({
    key: 'favoritesState',
    default:t !==null ?jwt.decode(t).favorites:[]

  });




  export const languagesState = atom({
    key: 'languagesState',
    default: ['English','French','German','Italian','Spanish','Polish','Portuguese','Norwegian','Finnich','Danish','Swedish'],
  });


  export const resultsState = atom({
    key: 'resultsState',
    default: {display:false,data:[]},
  });

  export const voiceToneState = atom({
    key: 'voiceToneState',
    default: [{type:'professional',isActive:false},{type:'bold',isActive:false},{type:'adventurous',isActive:false},{type:'friendly',isActive:false},{type:'luxury',isActive:false},{type:'no tone',isActive:true}]
  });

