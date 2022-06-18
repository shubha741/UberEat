import React from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import biriyani from "../assets/food/1.jpg";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localData = [
  {
    name: "Red Chilly ",
    image_url:
      "https://cdn.tasteatlas.com/images/dishes/3bd6dfaf53e244dfb7f3ee390447a2f8.jpg?w=600&h=450",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 4.8,
    rating: 12444,
  },

  {
    name: "Kabbab Center",
    image_url:
      "https://cdn.tasteatlas.com/images/dishes/3bd6dfaf53e244dfb7f3ee390447a2f8.jpg?w=600&h=450",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 4.2,
    rating: 444,
  },

  {
    name: "Palav Center ",
    image_url:
      "https://cdn.tasteatlas.com/images/dishes/3bd6dfaf53e244dfb7f3ee390447a2f8.jpg?w=600&h=450",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 4.8,
    rating: 6666,
  },

  {
    name: "Biriyani Center ",
    image_url:
      "https://cdn.tasteatlas.com/images/dishes/3bd6dfaf53e244dfb7f3ee390447a2f8.jpg?w=600&h=450",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 4.6,
    rating: 12444,
  },
];

export default function RestorauntItem(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {props.restorauntData.map((RestorauntName, index) => (
        <View key={index} style={styles.container}>
          <RestorauntImage image_url={RestorauntName.image_url} />
          <RestorauntInfo
            name={RestorauntName.name}
            rating={RestorauntName.rating}
          />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestorauntImage = (props) => (
  <>
    <Image source={{ uri: props.image_url }} style={styles.thumbnial} />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={40} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestorauntInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={styles.foodName}>{props.name}</Text>
      <Text style={styles.foodDuration}>30-40</Text>
    </View>
    <View style={styles.foodRate}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  thumbnial: {
    width: "100%",
    height: 250,
  },
  foodName: {
    fontWeight: "bold",
    fontSize: 15,
  },
  foodDuration: {
    height: 25,
  },
  foodRate: {
    backgroundColor: "#eee",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    marginTop: 15,
    padding: 20,
    backgroundColor: "#fff",
  },
});
