import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Pressable, StyleSheet, Modal, TextInput, } from 'react-native'
import { addUser, getUsers, deleteUser } from '../db/users'


export default function UserScreen() {
    const [users, setUsers] = useState<any[]>([])
    const [visible, setVisible] = useState(false)
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')

    async function loadUsers() {
        const data = await getUsers()
        setUsers(data)
    }

    async function saveUser() {
        if (!name || !location) {
            return []
        }

        await addUser(name, location)
        await loadUsers()
        setName('')
        setLocation('')
        setVisible(false)

    }
    async function removeUser(id: number) {
        await deleteUser(id)
        await loadUsers() // refresh list
    }
    useEffect(() => {
        loadUsers()
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Users List</Text>
                <Pressable onPress={() => setVisible(true)}>
                    <Text style={styles.add}>Add User</Text>
                </Pressable>
            </View>

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
                        <Text style={styles.cell}>{index+1}</Text>
                        <Text style={styles.cell}>{item.name}</Text>
                        <Text style={styles.cell}>{item.location}</Text>
                        <Pressable onPress={() => removeUser(item.id)}>
                            <Text >Delete</Text>
                        </Pressable>
                    </View>
                )}
            />

            <Modal visible={visible} onRequestClose={() => setVisible(false)}>
                <Text>Add Users</Text>
                <Text>User Name:</Text>
                <TextInput placeholder='name' value={name} onChangeText={setName}></TextInput>
                <Text>Location:</Text>
                <TextInput placeholder='location' value={location} onChangeText={setLocation}></TextInput>

                <Pressable onPress={saveUser}>
                    <Text style={styles.add}>Save</Text>
                </Pressable>
            </Modal>



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