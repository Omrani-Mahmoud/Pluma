import React from 'react'
import { decodeToken } from "../Selectors/TokenSelector";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from "recoil";

function useDecodeToken() {
    const decoded = useRecoilValue(decodeToken)
    return decoded

}

export default useDecodeToken