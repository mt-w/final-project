import {combineReducers} from 'redux';
import cartReducer from './cart';
import pokemonReducer from './pokemon';
import pageReducer from './page';

const rootReducer= combineReducers ({
    pokemon: pokemonReducer,
    cart: cartReducer,
    page: pageReducer
});
export default rootReducer;