import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CartScreen() {
    const titlesArray = [
        "Title 1", "Title 2", "Title 3", "Title 4",
        "Title 5", "Title 6", "Title 7", "Title 8",
        "Title 9", "Title 10", "Title 11", "Title 12"
    ];

    const [counts, setCounts] = useState<number[]>([]);

    useEffect(() => {
        const loadCounts = async () => {
            const stored = await AsyncStorage.getItem("countsStorage");
            if (stored) {
                setCounts(JSON.parse(stored));
            }
        };

        loadCounts();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Cart Items</Text>
            <ScrollView contentContainerStyle={styles.list}>
                {counts.map((count, index) => {
                    if (count > 0) {
                        return (
                            <View key={index} style={styles.card}>
                                <Text style={styles.title}>
                                    {titlesArray[index]}
                                </Text>
                                <Text style={styles.count}>
                                    {count} item{count > 1 ? "s" : ""}
                                </Text>
                            </View>
                        );
                    }
                    return null;
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        paddingHorizontal: 16,
        paddingTop: 16
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 12
    },
    list: {
        paddingBottom: 20
    },
    card: {
        backgroundColor: "#FFFFFF",
        padding: 16,
        borderRadius: 10,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 2 // Android shadow
    },
    title: {
        fontSize: 16,
        fontWeight: "500"
    },
    count: {
        fontSize: 14,
        color: "#666"
    }
});
