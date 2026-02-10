import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import CardTitleText from '../../components/cardTitleText';
import { COLORS, SubScheduleItem } from '../StaticData';

type props = {

    imageurl?: string,
    startTime: string,
    endTime: string,
    title: string,
    location: string,
    index: number,
    description?: string,
    showViewOptions?: boolean,
    subEvents?: SubScheduleItem[],
}
function ViewOptionsAction(expand: boolean) {
    console.log("Button Clicked")
    expand = false
}

export default function EventCardItem({ imageurl, startTime, endTime, title, location, index, description, showViewOptions, subEvents }: props) {
    const accentColor = COLORS[index % COLORS.length]
    const [expanded, setExpandeded] = useState(false)

    return (
        <View style={style.wrapper}>
            <View style={style.cardStyle}>
                <View style={[style.TineLineBlock, { backgroundColor: accentColor }]}>
                    <Text>{startTime}</Text>
                    <View style={style.divider} />
                    <Text>{endTime}</Text>
                </View>
                <View style={style.ContentSection}>
                    <CardTitleText text={title} key={title}></CardTitleText>
                    <Text>{location}</Text>
                    <Text>{description}</Text>
                    {showViewOptions && (
                        <Pressable onPress={() =>
                            setExpandeded(!expanded)
                        }>
                            <Text>View Options</Text>
                        </Pressable>
                    )}
                </View>
            </View>


            {expanded && subEvents?.map((item) => (
                <View style={style.subCard}>
                        <View style={style.ContentSection}>
                            <CardTitleText text={item.title} key={item.title}></CardTitleText>
                            <Text>{item.location}</Text>

                        </View>
                </View>
            ))}

        </View>
    )
}

const style = StyleSheet.create({
    wrapper: {
        marginBottom: 8,
    },

    cardStyle: {
        flexDirection: 'row',
        gap: 10,
        // padding: 20,
        margin: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowRadius: 30,

    },

    TineLineBlock: {
        padding: 20,
    },

    ImageStyle: {
        width: 30,
        height: 30,
        borderRadius: 20,
    },

    ContentSection: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 5,
    },
    divider: {
        width: 1,
        height: 50,
        backgroundColor: '#DDD',
        marginHorizontal: 12,
    },
    subCard: {
        marginLeft: 60,      // 👈 indent under parent
        marginRight: 10,
        marginTop: 6,
        padding: 14,
        borderRadius: 12,
        backgroundColor: '#f5f5f5',
    },
})