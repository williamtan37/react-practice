import React, {useState, useEffect} from 'react'
import TodoItem from "./TodoItem";

export default function TodoList() {
	const [inputValue, setInputValue] = useState('');
	const [todoList, setTodoList] = useState([]);
	const [id, setId] = useState(0);
  
  useEffect(()=> {
    document.title = `You have ${todoList.length} TODOS`;
  })

	const handleAddTodo = () => {
		let newTodoList = todoList.slice();
		newTodoList.push({id, text: inputValue});
		setTodoList(newTodoList);
		setId(id+1);
		setInputValue("");
  }

	const handleRemoveTodo = (id) => {
		let newTodoList = todoList.filter(todo => {
			return todo.id !== id
		})
		setTodoList(newTodoList);
	}

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
  }

	return (
		<div> 
			<h1> TODO </h1>
			<form>
				<input
					value = {inputValue} 
					onChange={handleInputChange}
					type="text" />
			</form>
			<button onClick={handleAddTodo}>Add Todo</button>
			<ol>
				{todoList.map(todo => {
					return <TodoItem
										key={todo.id}
										text={todo.text}
										onRemoveTodo={() => handleRemoveTodo(todo.id)}/>
        })}
			</ol>
		</div>
	);
}

