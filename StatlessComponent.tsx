//REACT STATELESS COMPONENT

import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger.scss';
import Ingredient from './ingredient/Ingredient';
import { INGREDIENTS } from '../../../constants/ingredients';

/**
* We place propTypes and defaultProps objects before component
* definition, however we remember to assign those objects at the
* end of file
*/

const propTypes = {
ingredients: PropTypes.object.isRequired
}

const defaultProps = {
ingredients: {}
}

export const Burger = (props) => {

const {
ingredients,
} = props;

/**
* We try to keep things simple, so we avoid using
* complex nesting
*/

// let renderIngredients = Object.keys(ingredients)
// .map(ingredient => (
// [...Array(ingredients[ingredient])]
// .map((_, idx) => (
//
// key={ingredient + '_' + idx}
// type={ingredient}
// />
// )
// )
// ))
// .reduce((acc, item) => [...acc, ...item], []);

const mapIngredients = (ingredients, ingredientKey) => {
return ingredients.map((ingredient, idx) => (
key={ingredientKey + '_' + idx}
type={ingredientKey}
/>
))
};

const renderIngredients = () => {
return Object.keys(ingredients)
.map(ingredient => mapIngredients([...Array(ingredients[ingredient]), ingredient]))
.reduce((acc, item) => [...acc, ...item], []);
}

if (renderIngredients.length === 0) {
return (


Please add ingredients


);
}

return (


{renderIngredients()}


);
};

Burger.propTypes = propTypes;
Burger.defaultProps = defaultProps;
