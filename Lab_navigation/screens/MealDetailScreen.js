import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const mealId = props.navigation.getParam("categoryId");

  const showMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Text>{showMeal.title}</Text>
      <Text>{showMeal.steps}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          // เขียนโค้ดเพิ่ม
          props.navigation.navigate('Categories');
        }}
      />
    </View>
  );
};


MealDetailScreen.navigationOptions = (navigationData) => {
  // เขียนโค้ดเพิ่มเพื่อแสดงชื่อเมนูอาหารที่เลือกให้เป็นเฮดเดอร์
  const mealId = navigationData.navigation.getParam("categoryId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
  };

};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
