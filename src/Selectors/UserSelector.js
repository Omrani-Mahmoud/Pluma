import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import {userState} from '../Atoms/Atoms'



export const updateUser = selector({
  key:'getInformation',
  get:({get})=>{
    let info = {};
    const user = get(userState);
    info.fullname=user.fullname;
    info.password=user.password;
    info.email=user.email;

    return info
  }
})