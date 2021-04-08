import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import {voiceToneState} from '../Atoms/Atoms'



export const getTones = selector({
  key:'getTones',
  get:({get})=>{
    const tones = get(voiceToneState);
    return tones
  }
})


export const getActiveTone = selector({
    key:'getActiveTone',
    get:({get})=>{
      const tones = get(voiceToneState);
      console.log('Toness here',tones)
        let activeTone = tones?.filter(tone=> {
            return tone.isActive === true
        })
        return activeTone[0]
    }
  })