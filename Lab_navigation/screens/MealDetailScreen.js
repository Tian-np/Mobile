import React, { useCallback, useEffect } from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import MealItem from "../components/MealItem";
// import { MEALS } from "../data/dummy-data";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/mealsAction";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const mealId = props.navigation.getParam("categoryId");
  const dispatch = useDispatch();
  const selectedMeal = useSelector((state) => state.meals.meals);
  const showMeal = selectedMeal.find((meal) => meal.id === mealId);
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  const currentMealIsFav = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );
  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFav });
  }, [currentMealIsFav]);

  return (
    <View style={styles.screen}>
      <View>
        <ImageBackground
          source={{ uri: showMeal.imageUrl }}
          style={styles.bgImage}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {props.title}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <Text>The Meal Detail Screen!</Text>
      <Text>{showMeal.title}</Text>
      <Text>{showMeal.steps}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          // เขียนโค้ดเพิ่ม
          props.navigation.navigate("Categories");
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // เขียนโค้ดเพิ่มเพื่อแสดงชื่อเมนูอาหารที่เลือกให้เป็นเฮดเดอร์
  const isFavorite = navigationData.navigation.getParam("isFav");
  const mealTitle = navigationData.navigation.getParam("mealTitle");

  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);\

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={navigationData.navigation.getParam("toggleFav")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    width: "50%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
