import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";



const Buffer=()=>{
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator />
        <ActivityIndicator size="large" color="#1BB60D" />
      </View>
    );
  }


const styles = StyleSheet.create({
  horizontal: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 2
  }
});

export default Buffer;