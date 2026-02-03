import { useState } from "react";
import styles from './form.module.css'
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

export default function Form ({todos,setTodos}) {
    const [todo, setTodo] = useState('');
    function handlePrevent (e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
    }
    return <div>
        <form className={styles.todoform} onSubmit={handlePrevent}>
            <div className={styles.formContainer}>
                <input className={styles.moderninput}
                       onChange={(e) => setTodo(e.target.value)} 
                       type="text" value={todo}
                       placeholder="Enter Todo item"
                       />
                <button className={styles.btnForm} type="submit" >Add</button>
            </div>
           </form>
    </div>
}