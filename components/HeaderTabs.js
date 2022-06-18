import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  onPress,
} from "react-native";


export default function HeaderTabs() {
  const [activetabs, setActiveTabs] = useState("Delivery");
  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        btnBg="white"
        btnColor="black"
        activetabs={activetabs}
        setActiveTabs={setActiveTabs}
      />
      <HeaderButton
        text="PickUps"
        btnBg="black"
        btnColor="white"
        activetabs={activetabs}
        setActiveTabs={setActiveTabs}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={[
      { backgroundColor: props.activetabs === props.text ? "black" : "white" },
      styles.button,
    ]}
    onPress={() => props.setActiveTabs(props.text)}
  >
    <Text
      style={[
        { color: props.activetabs === props.text ? "white" : "black" },
        styles.text,
      ]}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center"
    
  },

  button: {
    paddingVertical: 6,
    paddingHorizontal: 16,
  },

  text: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
