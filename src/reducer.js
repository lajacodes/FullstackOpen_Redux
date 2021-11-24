const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "GOOD":
      const goodstate = state.good + 1;
      return { ...state, good: goodstate };
    case "OK":
      const okstate = state.ok + 1;
      return { ...state, ok: okstate };     
    case "BAD":
      const badstate = state.bad + 1;
      return { ...state, bad: badstate };
    case "ZERO":
      return { good: 0, ok: 0, bad: 0 };    
    default:
      return state;
  }
};

export default counterReducer;  
