import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";

//Tutaj to bym zrobił tak że jeśli nowe to będzie initial state ustawiony na taki jaki ma być z pustymi tablicami itd.
//Jeśli edycja to zrobimy thunk wczytujący z bazy i wtedy wszystko ładnie się aktualizuje 
//I gdy klikamy zapisz wysyłamy cały state do bazy i już wszystko powinno działać 
const loadFromDatabase = createAsyncThunk(); //Do uzupełnienia jak juz będzie baza

const initialState = {
  name: "Brak nazwy",
  kcalValue: "Kaloryczność",
  mealsCount: 1,
  items: [
    {
      id: 1,
      meals: [
        {
          id: 1,
          products: [],
        },
      ],
    },
  ],
};

const dietCreatorSlice = createSlice({
  name: "dietCreator",
  initialState,
  reducers: {
    updateDietName: (state, action) => {
      state.name = action.payload;
    },
    updateDietKcalValue: (state, action) => {
      state.kcalValue = action.payload;
    },
    addDietItems: (state) => {
      const newId = state.items[state.items.length - 1].id + 1;
      let item = {
        meals: [],
      };

      for (let i = 0; i < state.mealsCount; i++) {
        item.meals.push({ id: i + 1, products: [] });
      }
      state.items.push({ id: newId, ...item });
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
    passProductToMeal: (state, action) => {
      state.items.map((day) => {
        if (day.id === action.payload.dayId) {
          day.meals.map((meal) => {
            if (meal.id === action.payload.mealId) {
              meal.products = action.payload.products;
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
  passProductToMeal,
  updateDietName,
  updateDietKcalValue,
} = dietCreatorSlice.actions;

export const selectDietCreatorItems = (state) => state.dietCreator.items;
export const selectCurrentDayCount = (state) => state.dietCreator.items.length;

export const selectMealsCount = (state) => state.dietCreator.mealsCount;
export const selectDietName = (state) => state.dietCreator.name;
export const selectKcalValue = (state) => state.dietCreator.kcalValue;

export const selectAllProductInMeal = createSelector(
  (state) => state.dietCreator.items,
  (_, dayId) => dayId,
  (_, mealId) => mealId,
  (items, dayId, mealId) =>
    items
      .find((day) => day.id === dayId)
      .meals.find((meal) => meal.id === mealId).products
);

export const selectLastDayId = (state) =>
  state.dietCreator.items[state.dietCreator.items.length - 1].id;

export default dietCreatorSlice.reducer;
