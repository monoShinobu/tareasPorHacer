import { useState } from "react"


export const useCounter = (initialState = 10) => {
  
    const [state, setState] = useState(initialState)

    const math = (factor = 1 ) => {
        setState(state + factor);
    }

    const reset = () => {
        setState(initialState)
    }

    return {
        state,
        math,
        reset
    };

}
