const initialState = {
    todos: [],
    counter: 0
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
                counter: state.counter + 1,
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
                counter: state.counter++
            }

        default:
            return state;
    }
}

export default reducer;