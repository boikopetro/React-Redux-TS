import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {
    const {page, loading, todos, limit, error} = useTypedSelector(state => state.todo);
    const {fetchTodos, setTodoPage} = useActions();
    const pages = [1, 2, 3, 4, 5];
    
    useEffect(() => {
        fetchTodos(page, limit)
    },[page]);

    if (loading) {
        return <p>loading...</p>
    }
    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            {todos.map(todo => <p key={todo.id}>{todo.id} - {todo.title}</p>)}
            {pages.map(p =>
                <span
                    onClick={() => setTodoPage(p)}
                    key={p}
                    style={{border:p === page ? "2px solid red" : "1px solid grey", padding: "5px", margin: "5px"}}
                >
                    {p}
                </span>
            )}
        </div>
    );
};

export default TodoList;