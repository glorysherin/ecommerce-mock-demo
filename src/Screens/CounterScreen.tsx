import { Text, StyleSheet, View, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { increment, decrement, resetState } from '../store/CounterSlice'
import { AppDispatch, RootState } from '../store/CounterStore'
import { addUser, getUsers, deleteUser } from '../db/users'


export default function CounterScreen() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()
    const [users, setUsers] = useState<any[]>([])
    async function loadUsers() {
        const data = await getUsers()
        setUsers(data)
    }
    useEffect(() => {
        loadUsers()
    }, [])

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


// users screen

            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={() => (
                    <View style={styles.row}>
                        <Text style={styles.cell}>ID</Text>
                        <Text style={styles.cell}>Name</Text>
                        <Text style={styles.cell}>Location</Text>
                    </View>
                )}
                renderItem={({ item, index }) => (
                    <View style={styles.row}>
                        <Text style={styles.cell}>{index + 1}</Text>
                        <Text style={styles.cell}>{item.name}</Text>
                        <Text style={styles.cell}>{item.location}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, padding: 16
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    add: {
        color: 'blue',
        fontSize: 16
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 8,
        borderBottomWidth: 1,
    },

    cell: { flex: 1 },
})