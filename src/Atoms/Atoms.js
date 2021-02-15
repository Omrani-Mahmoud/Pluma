import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';



  export const userState = atom({
    key: 'userState',
    default: {first_name:'mahmoud',last_name:'omrani'},
  });



  export const workSpaceState = atom({
    key: 'workSpaceState',
    default: [
   
      {name:'Bicycle booth',isActive:true},
      {name:'Alissar',isActive:false},
      {name:'Logistio',isActive:false},
    ],
  });




  export const languagesState = atom({
    key: 'languagesState',
    default: ['English','French','Arabic','Spanish','Chinese','Italian'],
  });


