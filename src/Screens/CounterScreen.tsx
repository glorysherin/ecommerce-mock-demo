import { Text, StyleSheet, View, Pressable } from 'react-native'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { increment, decrement, resetState } from '../store/CounterSlice'
import { AppDispatch, RootState } from '../store/CounterStore'


export default function CounterScreen() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <View>
            <Text>Redux Counter</Text>
            <Text>{count}</Text>

            <Pressable onPress={() => dispatch(decrement())}>
                <Text>-</Text>
            </Pressable>
            <Pressable onPress={() => dispatch(increment())}>
                <Text>+</Text>
            </Pressable>
            <Pressable onPress={() => dispatch(resetState())}>
                <Text>Reset value</Text>
            </Pressable>


        </View>
    )
}