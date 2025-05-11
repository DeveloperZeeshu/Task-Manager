import { MdCheck, MdDeleteForever } from 'react-icons/md';
export const TodoList = ({curTask, TodoRemove, checked, onHandleCheckedTodo}) => {
    return (
        <>
            <li className='todo-item'>
                <span className={checked ? 'checkList' : 'notCheckList'}>{curTask}</span>
                <button className='check-btn' onClick={() => onHandleCheckedTodo(curTask)}><MdCheck /></button>
                <button className='delete-btn' onClick={() => TodoRemove(curTask)}><MdDeleteForever /></button>
            </li>
        </>
    )
}