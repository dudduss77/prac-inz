import { createSlice } from "@reduxjs/toolkit";
import { current } from "immer";

const initialState = {
  name: "test",
  kcalValue: "2000kcal",
  mealsCount: 1,
  items: [
    {
      id: 1,
      meals: [
        {
          id: 1,
          products: [
            {
              id: 1,
              name: "Bułka",
              weight: 100,
              proteinOnHundredGrams: 5,
              carbohydratesOnHundredGrams: 6,
              fatOnHundredGrams: 1,
            },
          ],
        },
        // {
        //   id: 2,
        //   products: [
        //     {
        //       id: 1,
        //       name: "Bułka",
        //       weight: 100,
        //       proteinOnHundredGrams: 5,
        //       carbohydratesOnHundredGrams: 6,
        //       fatOnHundredGrams: 1,
        //     },
        //   ],
        // },
        // {
        //   id: 3,
        //   products: [],
        // },
        // {
        //   id: 4,
        //   products: [],
        // },
        // {
        //   id: 5,
        //   products: [],
        // },
      ],
    },
    {
      id: 2,
      meals: [
        {
          id: 1,
          products: [],
        },
        // {
        //   id: 2,
        //   products: [],
        // },
        // {
        //   id: 3,
        //   products: [],
        // },
        // {
        //   id: 4,
        //   products: [],
        // },
        // {
        //   id: 5,
        //   products: [],
        // },
      ],
    },
  ],
};

const dietCreatorSlice = createSlice({
  name: "dietCreator",
  initialState,
  reducers: {
    addDietItems: (state, action) => {
      const newId = state.items[state.items.length - 1].id + 1;
      state.items.push({ id: newId, ...action.payload });
    },
    deleteDietItems: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateMealsCount: (state, action) => {
      if (state.mealsCount !== action.payload) {
        state.mealsCount = action.payload;
        state.items.forEach((day) => {
          if (day.meals.length < state.mealsCount) {
            for (let i = day.meals.length; i < state.mealsCount; i++) {
              day.meals.push({ id: i + 1, products: [] });
            }
          } else {
            day.meals = day.meals.slice(0, state.mealsCount);
          }
        });
      }
    },
    updateProductWeight: (state, action) => {
      state.items.map((day) => {
        if (day.id === action.payload.itemId) {
          day.meals.map((meal) => {
            if (meal.id === action.payload.mealId) {
              meal.products.map((product) => {
                if (product.id === action.payload.productId) {
                  return (product.weight = action.payload.newWeight);
                } else return product;
              });
            } else return meal;
          });
        } else return day;
      });
    },
    addProductToMeal: (state, action) => {
      state.items.map((day) => {
        if (day.id === action.payload.dayId) {
          day.meals.map((meal) => {
            if (meal.id === action.payload.mealId) {
              meal.products.push({
                id: meal.products.length + 1,
                ...action.payload.product,
              });
            }
            return meal;
          });
        } else return day;
      });
    },
    deleteProductFromMeal: (state, action) => {
      state.items.map((day) => {
        if (day.id === action.payload.dayId) {
          day.meals.map((meal) => {
            if (meal.id === action.payload.mealId) {
              meal.products = meal.products.filter(
                (product) => product.id !== action.payload.productId
              );
            }
            return meal;
          });
        } else return day;
      });
    },
  },
});

export const {
  addDietItems,
  deleteDietItems,
  updateProductWeight,
  updateMealsCount,
  addProductToMeal,
  deleteProductFromMeal,
} = dietCreatorSlice.actions;

export const selectDietCreatorItems = (state) => state.dietCreator.items;
export const selectCurrentDayCount = (state) =>
  state.dietCreator.items.length + 1;

export const selectMealsCount = (state) => state.dietCreator.mealsCount;

export default dietCreatorSlice.reducer;
