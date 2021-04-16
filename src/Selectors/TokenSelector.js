import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

import jwt from 'jsonwebtoken';

import {tokenState} from '../Atoms/Atoms'



export const getToken = selector({
  key:'getToken',
  get:({get})=>{
    const {token} = get(tokenState);
    return token
  }
})



export const decodeToken = selector({
    key:'decodeToken',
    get:({get})=>{
      const {token} = get(tokenState);
      return jwt.decode(token)
    }
  })