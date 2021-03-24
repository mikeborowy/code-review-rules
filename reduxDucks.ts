REACT REDUX-DUCKS

import { INGREDIENTS_PRICES } from '../../constants/ingredients';
// API
import { burgerAPI } from '../../services/api/burger';

// Types
export const actionTypes = {
BURGER_ADD_INGREDIENT: 'BURGER_ADD_INGREDIENT',
BURGER_REMOVE_INGREDIENT: 'BURGER_REMOVE_INGREDIENT',
BURGER_SET_INGREDIENTS: 'BURGER_SET_INGREDIENTS',
BURGER_INGREDIENTS_ERR: 'BURGER_INGREDIENTS_ERR',
};

// Action creators
export const onAddIngredient = (ingredientName) => {
return {
type: actionTypes.BURGER_ADD_INGREDIENT,
ingredientName,
};
};
export const onRemoveIngredient = (ingredientName) => {
return {
type: actionTypes.BURGER_REMOVE_INGREDIENT,
ingredientName,
};
};
export const onSetIngredients = (ingredients) => {
return {
type: actionTypes.BURGER_SET_INGREDIENTS,
ingredients,
};
};
export const onIngredientsError = () => {
return { type: actionTypes.BURGER_INGREDIENTS_ERR };
};

// API Action creators
export const onGetIngredientsAPI = () => {
return async (dispatch) => {
try {
const response = await burgerAPI.getIngredients();
dispatch(onSetIngredients(response.data));
} catch (error) {
dispatch(onIngredientsError(error));
}
};
};

// Reducer Model
const inistialState = {
isBuilding: false,
ingredients: {},
totalPrice: 0,
error: false,
};

// Reducer
export const burger = (state = inistialState, action) => {
switch (action.type) {
case actionTypes.BURGER_ADD_INGREDIENT:
return {
...state,
isBuilding: true,
ingredients: {
...state.ingredients,
[action.ingredientName]: state.ingredients[action.ingredientName] + 1,
},
totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName.toUpperCase()],
};
case actionTypes.BURGER_REMOVE_INGREDIENT:
return {
...state,
ingredients: {
...state.ingredients,
[action.ingredientName]: state.ingredients[action.ingredientName] - 1,
},
totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.ingredientName.toUpperCase()],
};
case actionTypes.BURGER_SET_INGREDIENTS:
return {
...state,
isBuilding: false,
ingredients: {
salad: action.ingredients.salad,
bacon: action.ingredients.bacon,
cheese: action.ingredients.cheese,
meat: action.ingredients.meat,
},
totalPrice: 0,
error: false,
};
case actionTypes.BURGER_INGREDIENTS_ERR:
return {
...state,
error: true,
};
default:
return state;
}
};
