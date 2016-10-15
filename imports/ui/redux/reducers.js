const initialState = {
  queries: ['', '', ''],
  restaurants: [],
  photoURLs: {},
};

const store = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TERM':
      return (
        Object.assign({}, state, {
          queries:
          state.queries.slice(0, action.index)
            .concat([action.term])
            .concat(state.queries.slice(action.index + 1)),
        })
      );
    case 'GET_RESTAURANTS':
      return (
        Object.assign({}, state, {
          restaurants: action.restaurants,
        })
      );
    default:
      return state;
  }
};

export default store;
