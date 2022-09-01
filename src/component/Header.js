import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import notesImage from "../assets/images/notes.png";
import doubleImage from "../assets/images/double-tick.png";
import plusImae from "../assets/images/plus.png";
import { added, allcompleded, allcleard } from '../redux/todos/actions';

const Header = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(added(input));
        setInput('');
    }

    const handleAllComplete = () => {
        dispatch(allcompleded());
    };

    const handleAllClearComplete = () => {
        dispatch(allcleard());
    };

    return (
        <div>
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                onSubmit={handleSubmit}
            >
                <img
                    src={notesImage}
                    className="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    value={input}
                    onChange={handleInput}
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImae}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer" onClick={handleAllComplete}>
                    <img
                        className="w-4 h-4"
                        src={doubleImage}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={handleAllClearComplete}>Clear completed</li>
            </ul>
        </div>
    )
}

export default Header