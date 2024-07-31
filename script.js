// initilal state
const initialState = {
  value: 0,
};

// now I will create the reducer function
function counterReducer(state = initialState, action) {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

// button Click Listener
