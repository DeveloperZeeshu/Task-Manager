import './Todo.css';
import { useEffect, useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDate } from './TodoDate';
import { getLocalStorageTodoData, setLocalStorageTodoData } from './todoLocalStorage';

export const Todo = () => {

    const [task, setTask] = useState(()=> getLocalStorageTodoData());
    useEffect(() => {
        setLocalStorageTodoData(task);
    }, [task]);

    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;
        if (!content) return;
        const ifTodoContentMatch = task.find((curElem) => curElem.content == content);
        if (ifTodoContentMatch) return;
        setTask((prevTask) => [...prevTask, { id, content, checked }]);

        setLocalStorageTodoData(task);
    };

    const handleTodoRemove = (curTask) => {
        const updatedTask = task.filter((curElem) => curElem.content !== curTask);
        setTask(updatedTask);
    };

    const handleClearButton = () => {
        setTask([]);
    };

    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked };
            }
            else {
                return curTask;
            }
        });
        setTask(updatedTask); 
    };

    return (
        <>
            <section className='todo-container'>
                <header>
                    <h1>ToDo List</h1>
                    <TodoDate />
                </header>
                <TodoForm onAddTodo={handleFormSubmit} />
                <section className='myUnOrdList'>
                    <ul>
                        {
                            task.map((curTask) => {
                                return (
                                    <>
                                        <TodoList key={curTask.id} onHandleCheckedTodo={handleCheckedTodo} checked={curTask.checked} curTask={curTask.content} TodoRemove={handleTodoRemove} />
                                    </>
                                )
                            })
                        }
                    </ul>
                </section>
                <section>
                    <button className='clear-btn' onClick={handleClearButton}>Clear All</button>
                </section>
            </section>
        </>
    )
}

