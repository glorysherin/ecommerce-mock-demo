import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, useWindowDimensions, TouchableOpacity, StyleSheet, Image } from "react-native";
import { fetchPhotos } from "../api/PhotoApi";
import { Photo } from "../models/Photo";
import PhotoItem from "../Screens/PhotoItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PhotosStackParamList } from "./PhotosStack";

type Props = NativeStackScreenProps<
  PhotosStackParamList,
  "Photos"
>;

export default function PhotosScreen({ navigation }: Props) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowDimensions();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)


  // 🎯 Calculate dynamic columns
  const SPACING = 8;
  const numColumns = Math.floor(width / 120);

  // total spacing in one row
  const totalSpacing = SPACING * (numColumns + 1);

  // actual item size
  const itemSize = Math.floor((width - totalSpacing) / numColumns);


  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    try {
      const data = await fetchPhotos();
      setPhotos(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View>
    <FlatList
      key={numColumns}
      data={photos}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      contentContainerStyle={{
        paddingHorizontal: SPACING,
        paddingTop: SPACING,
      }}
      columnWrapperStyle={{
        justifyContent: "space-between",
        marginBottom: SPACING,
      }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <PhotoItem
          photo={item}
          size={itemSize}
          onPress={() => setSelectedPhoto(item)}
        />
      )}
    />
{selectedPhoto && (
  <View style={styles.overlay}>
    <TouchableOpacity
      style={StyleSheet.absoluteFillObject}
      activeOpacity={1}
      onPress={() => setSelectedPhoto(null)}
    />

    <View style={styles.modalContainer}>
      <Image
        source={{ uri: selectedPhoto.download_url }}
        style={styles.modalImage}
        resizeMode="contain"
      />
    </View>
  </View>
)}
</View>
  );
}


const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    height: "70%",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "black",
  },
  modalImage: {
    flex: 1,
  },
});
