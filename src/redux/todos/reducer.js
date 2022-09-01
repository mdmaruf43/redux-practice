import { initialState } from './initialState';
import { ADDED, TOGGLEED, DELETED, ALLCLEARED, ALLCOMPLEDED, COLORSELECTED } from "./actionTypes";

const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false
                }
            ];
        case TOGGLEED:
            return state.map((todo) => {
                if (todo.id !== action.payload) {
                    return todo;
                } 
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        case COLORSELECTED:
            const {todoId, color} = action.payload;
            return state.map((todo) => {
                if (todo.id !== todoId) {
                    return todo;
                }
                return {
                    ...todo,
                    color: color,
                }
            })
        case DELETED:
            return state.filter((todo) => todo.id !== action.payload);
        
        case ALLCOMPLEDED: 
            return state.map((todo) => {
                return {
                    ...todo,
                    completed: true,
                }
            })
        case ALLCLEARED:
            return state.filter((todo) => !todo.completed);

        default:
            return state;
    }
}

export default reducer;