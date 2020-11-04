import React, { useRef } from "react";
import { Animated, View, StyleSheet, Button, Easing } from "react-native";
import Spring from "./Spring";

const Parallel = (props) => {
  // const springVal = useRef(new Animated.Value(0.3)).current;
  const dukdik = useRef(new Animated.Value(0)).current;
  const spinAnim = useRef(new Animated.Value(0)).current;

  const spin = dukdik.interpolate({
    inputRange: [0, 0.25, 0.75, 1],
    outputRange: [0, 100, 0, -100],
  });
  const spring = () => {
    Animated.parallel([
      Animated.spring(spinAnim, {
        toValue: 1,
        friction: 1,
      }).start(() => {
        spinAnim.setValue(0);
      }),
      Animated.timing(dukdik, {
        toValue: 1,
        duration: 5000,
        easing: Easing.bounce,
      }).start(() => {
        spinAnim.setValue(0);
      }),
    ]).start();
  };
  return (
    <View style={styles.container}>
      <Animated.View>
        <Animated.Image
          style={{
            width: 180,
            height: 150,
            transform: [{ scale: spinAnim }],
          }}
          source={require("../assets/itlogo.png")}
        />
      </Animated.View>
      <Animated.Text
        style={{
          fontSize: 40,
          color: "red",
          transform: [{ translateX: spin }],
        }}
      >
        Hello Prayut
      </Animated.Text>
      <Button title="RUN Parallel" onPress={spring} />
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
export default Parallel;
