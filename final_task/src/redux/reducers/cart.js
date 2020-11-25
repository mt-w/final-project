const initialState = {
  items: {},
  totalCount: 0,
};

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POKEMON_CART': {
      const currentPokemonItems = !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPokemonItems
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');

      return {
        ...state,
        items: newItems,
        totalCount,
      };
    }

    default:
      return state;
  }
};

export default cart;