import react, { useState } from 'react'


export default function Todos() {

    const [newTodo, setNewTodo] = useState('')
    // const [] = useState([])


    function handleNewTodoChange(e) {
        e.preventDefault()
        setNewTodo(e.target)
    }

    return (
        <>
            <h1>Todos</h1>
            <form>

                <input placeholder="Your todo..." 
                onChange={handleNewTodoChange}></input>
                
                <ul>
                    <li>buy milk</li>
                </ul>

            </form>
            
        </>
    )
}