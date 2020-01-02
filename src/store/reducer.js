export const initState = {
  counter: 0,
  name: "test"
}

export const reducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT":{
      return {...state, counter: state.counter + 1}
    }
    case "DESCREMENT":{
      return {...state, counter: state.counter - 1}
    }
    default:{
      return  initState;
    }
  }
}
