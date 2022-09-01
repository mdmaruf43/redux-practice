import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { statusChanged, colorChanged } from '../redux/filters/actions';

const numberOfTodos = (number_of_todos) => {
    switch (number_of_todos) {
        case 0:
            return `No task`
        case 1:
            return `1 task`
        default:
            return `${number_of_todos} tasks`;
    }
}

const Footer = () => {
    const todos = useSelector(state => state.todos);
    const filters = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const {status, colors} = filters;
    const leftTask = todos.filter(todo => !todo.completed).length;

    const handleStatus = (status) => {
        dispatch(statusChanged(status));
    }


    const handleColorChanged = (color) => {
        if(colors.includes(color)) {
            dispatch(colorChanged(color, 'remove'));
        } else {
            dispatch(colorChanged(color, 'add'));
        }
        
    }

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(leftTask)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${status === 'All' && 'font-bold'}`} onClick={() => handleStatus("All")}>All</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}`} onClick={() => handleStatus("Incomplete")}>Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Complete' && 'font-bold'}`} onClick={() => handleStatus("Complete")}>Complete</li>
                <li></li>
                <li></li>
                <li
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`}
                    onClick={() => handleColorChanged('green')}
                ></li>
                <li
                    onClick={() => handleColorChanged('red')}
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}
                ></li>
                <li
                    onClick={() => handleColorChanged('yellow')}
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`}
                ></li>
            </ul>
        </div>
    )
}

export default Footer