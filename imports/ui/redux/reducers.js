const initialState = {
  queries: ['', '', ''],
  restaurants: [[], [], []],
  photoURLs: {},
  expanded: false,
  show: false,
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
    case 'ADD_RESTAURANTS':
      return (
        Object.assign({}, state, {
          restaurants: state.restaurants.map((e, i) => {
            if (action.index === i) {
              return action.restaurants;
            }
            return e;
          }),
        })
      );
    case 'TOGGLE_COLLAPSE':
      return (
        Object.assign({}, state, {
          expanded: !state.expanded,
        })
      );
    case 'SHOW_END':
      return (
        Object.assign({}, state, {
          show: true,
        })
      );
    default:
      return state;
  }
};

export default store;
