import {createSlice} from '@reduxjs/toolkit'


type CounterState = {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value +=1
        },
        decrement(state) {
            state.value -= 1
        },
        resetState(state) {
            state.value = 0
        }
    }

})

export default CounterSlice.reducer 
export const {increment, decrement, resetState} = CounterSlice.actions