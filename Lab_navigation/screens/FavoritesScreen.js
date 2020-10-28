import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
// import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  // const favMeals = favoriteMeals.filter(
  //   (meal) => meal.id === "m1" || meal.id === "m2"
  // );

  return (
    <View style={styles.screen}>
      <MealList navigation={props.navigation} listData={favoriteMeals} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
