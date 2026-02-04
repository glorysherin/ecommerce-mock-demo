import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'


type props = {
    title: string,
    imageurl: string,
    count: number,
    onDecrement: () => void,
    onIncrement: () => void
}


export default function CardItems({ title, imageurl, count, onDecrement, onIncrement }: props) {

    return (
        <View style={style.cardStyle}>
            <Image source={{ uri: 'data:image/jpeg;base64,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' }}
                style={style.ImageStyle} />
            <View style={style.ContentSection}>
                <Text key={title}>{title}</Text>
                <Text>description</Text>
            </View>

            <View style={style.CounterSection}>

                <Pressable onPress={onDecrement}>
                    <Text>-</Text>
                </Pressable>

                <Text>{count}</Text>

                <Pressable onPress={onIncrement}>
                    <Text>+</Text>
                </Pressable>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    cardStyle: {
        flexDirection: 'row',
        gap: 10,
        padding: 20,
        margin: 10,
        borderRadius: 15,
        backgroundColor: 'gray',
        shadowColor: 'black',
        shadowRadius: 30,

    },

    ImageStyle: {
        width: 30,
        height: 30,
        borderRadius: 20,
    },

    ContentSection: {
        flexDirection: 'column'
    },

    CounterSection: {
        flexDirection: 'row',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 'auto',
        gap: 15
    },
    countervalue: {
        fontWeight: 'bold',
        fontSize: 30,
    }
})