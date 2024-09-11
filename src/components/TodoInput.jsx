import { useState } from "react"

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    return (
        <header>
            <icon className="fa-solid fa-square-check" />
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter your todo..." />
            
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}