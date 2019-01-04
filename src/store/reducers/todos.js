// todos = ['Fazer café', 'Estudar GoNative'];
const initialState = [
  { id: 0, text: 'Fazer café' },
  { id: 1, text: 'Estudar GoNative' },
];

export default function todos(state = initialState, action) {
  // console.tron.log(action.payload.text);

  switch (action.type) {
    case 'ADD_TODO': {
      console.tron.log('entrei na action ADD_TODO...');
      return [...state, { id: Math.random(), text: action.payload.text }];
    }
    case 'REMOVE_TODO': {
      console.tron.log('entrei na action REMOVE_TOD...');
      return state.filter(todo => todo.id !== action.payload.id);
    }
    default:
      return state;
  }
}
