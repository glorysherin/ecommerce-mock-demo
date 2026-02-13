import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Photo } from "../models/Photo";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PhotosStackParamList } from "./PhotosStack";

type Props = NativeStackScreenProps<
  PhotosStackParamList,
  "PhotoDetail"
>;

export default function PhotoDetailScreen({ route }: Props) {
  const { photo } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: photo.download_url }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
  },
  image: {
    flex: 1,
    width: "100%",
  },
});
