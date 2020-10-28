import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/mealsAction";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const index = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      const fMeal = [...state.favoriteMeals];
      if (index >= 0) {
        fMeal.splice(index, 1);
      } else {
        fMeal.push(state.meals.find((meal) => meal.id === action.mealId));
      }
      return {
        ...state,
        favoriteMeals: fMeal,
      };
    default:
      return state;
  }
};

export default mealReducer;
