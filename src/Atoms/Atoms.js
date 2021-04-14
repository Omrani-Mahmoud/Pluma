import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';



  export const userState = atom({
    key: 'userState',
    default: {fullname:'mahmoud Omrani',email:'omrani@omrani.com',plan:'Lifetime'},
  });

  export const tokenState = atom({
    key: 'tokenState',
    default: {token:''},
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

