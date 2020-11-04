import React, { useRef } from "react";
import { Animated, View, StyleSheet, Button } from "react-native";

const Sequence = (props) => {
  // const springVal = useRef(new Animated.Value(0.3)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const spinAnim = useRef(new Animated.Value(0)).current;

  const spin = spinAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "360deg", "0deg"],
  });
  const spring = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      spinAnim.setValue(0);
    });
  };
  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Animated.Image
          style={{
            width: 180,
            height: 150,
            transform: [{ rotate: spin }],
          }}
          source={require("../assets/itlogo.png")}
        />
      </Animated.View>
      <Button title="RUN SEQUENCE" onPress={spring} />
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
export default Sequence;
