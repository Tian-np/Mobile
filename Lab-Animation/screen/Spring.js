import React, { useRef } from "react";
import { Animated, View, StyleSheet, Button } from "react-native";

const Spring = (props) => {
  const springVal = useRef(new Animated.Value(0.3)).current;
  const spring = () => {
    Animated.spring(springVal, {
      toValue: 1,
      friction: 1,
    }).start(() => {
      springVal.setValue(0.3);
    });
  };
  return (
    <View style={styles.container}>
      <Animated.Image
        style={{ width: 180, height: 150, transform: [{ scale: springVal }] }}
        source={require("../assets/itlogo.png")}
      />
      <Button title="Spring" onPress={spring} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Spring;
