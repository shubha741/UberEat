import React from "react";

import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { ScrollView } from "react-native-web";

const Data = [
  {
    image: require("../assets/catogories/1.png"),
    text: "Pick-Up",
  },
  {
    image: require("../assets/catogories/2.jpg"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/catogories/bakery.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/catogories/fastfood.png"),
    text: "Fast Food",
  },
  {
    image: require("../assets/catogories/fastfood.png"),
    text: "Fast Food",
  },


];

export default function Catogaries() {
  const catogaryItem = ({ item }) => {
    return (
      <View>
        <Image source={item.image} style={styles.thumbnial} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* {Data.map((x) => (
        <View>
          <Image source={x.image} style={styles.thumbnial} />
          <Text>{x.text}</Text>
        </View>
      ))} */}

      <FlatList data={Data} renderItem={catogaryItem} horizontal  showsHorizontalScrollIndicator={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnial: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 30,
  },
  text: {
    fontWeight: "bold",
    marginRight: 30,
  },
  container: {
   backgroundColor:"#fff",
    padding:15
  },
});
