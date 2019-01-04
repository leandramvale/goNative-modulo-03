// todos = ['Fazer café', 'Estudar GoNative'];
const initialState = [
  { id: 0, text: 'Fazer café' },
  { id: 1, text: 'Estudar GoNative' },
];

export default function todos(state = initialState, action) {
  // console.tron.log(action.payload.text);

  switch (action.type) {
    case 'ADD_TODO':
      console.tron.log('entrei na action...');
      return [...state, { id: Math.random(), text: action.payload.text }];
    default:
      return state;
  }
}
