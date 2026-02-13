import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { Photo } from "../models/Photo";

interface Props {
  photo: Photo;
  onPress: () => void;
  size: number;
}

export default function PhotoItem({ photo, onPress, size }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { width: size, height: size }]}
      activeOpacity={0.8}
    >
      <Image
        source={{
          uri: `https://picsum.photos/id/${photo.id}/300/300`,
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
