import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PhotosScreen from "./PhotoScreen";
import PhotoDetailScreen from "./PhotoDetailScreen";

export type PhotosStackParamList = {
  Photos: undefined;
  PhotoDetail: { photo: any };
};

const Stack = createNativeStackNavigator<PhotosStackParamList>();

export default function PhotosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Photos" component={PhotosScreen} />
      <Stack.Screen name="PhotoDetail" component={PhotoDetailScreen} options={{presentation: 'transparentModal'}} />
    </Stack.Navigator>
  );
}
