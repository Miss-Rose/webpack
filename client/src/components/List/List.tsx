import React, {useEffect, useState} from 'react';
import './list.css';
import done from '../../assets/done.png';
import notDone from '../../assets/notdone.png';

type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

const List: React.FC = () => {
    const [todos, setTodos] = useState<Array<Todo>>();

    useEffect(() => {
        const getTodos = async() => {
            const res = await fetch(`http://localhost:3001/todos`);
            setTodos(await res.json());
        }
        getTodos();
    }, []);


    return(
        <ul className="list">
            {
                todos && todos.map(todo => (
                    <li
                        className="list-item"
                        key={todo.id}>
                        <div>
                            <img src={todo.completed ? done : notDone } alt={todo.completed ? 'done' : 'not done'}/>
                            <span>{todo.title}</span>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};

export default List;