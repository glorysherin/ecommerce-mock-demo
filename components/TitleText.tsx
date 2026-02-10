import React from "react";
import {StyleSheet, Text} from "react-native"

type Props = {
  text: string;
};

export default function TitleText({ text }: Props) {
  return <Text style={styles.title}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});