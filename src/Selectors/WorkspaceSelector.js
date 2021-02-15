import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

  import {workSpaceState} from '../Atoms/Atoms'



export const activeWorkspace = selector({
    key:'activeWorkspace',
    get:({get})=>{
      const workspaces = get(workSpaceState);
      let current = workspaces.filter(elem=>elem.isActive===true)[0];
      return current 
    }
    
  })
