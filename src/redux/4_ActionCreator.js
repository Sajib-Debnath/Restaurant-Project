import * as actionTypes from './3_ActionTypes';
import DISHES from '../data/Dishes';

export const addComment = (dishId, rating, author, comment) => {
    return ({
        type: actionTypes.ADD_COMMENT,
        payload: {
            author: author,
            rating: rating,
            comment: comment,
            dishId: dishId,
        }
    })
}

export const loadDishes = (dishes) => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionTypes.DISHES_LOADING,
})

export const fetchDishes = () => {
    return dispatach => {
        dispatach(dishesLoading());
        setTimeout(() => {
            dispatach(loadDishes(DISHES));
        },
            2000)
    }
}

