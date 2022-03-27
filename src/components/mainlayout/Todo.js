import { todoUpdate } from '../../store/todo-slice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import NewMiniTodo from './NewMiniTodo'
import styled from 'styled-components'

const Todo = ({ id, title, tasks }) => {
	const dispatch = useDispatch()

	const [showTextarea, setShowTextarea] = useState(false)
	const [text, setText] = useState('')

	const showAddHandler = () => {
		setShowTextarea((prevState) => !prevState)
	}
	const taskChangeHandler = (e) => {
		setText(e.target.value)
	}
	const addNewTodo = (e) => {
		e.preventDefault()
		if (text.trim().length > 0) {
			const cardData = {
				text,
				id: Math.random().toString(),
			}
			dispatch(todoUpdate({ cardData, id }))
			setText('')
		}
	}

	const content = showTextarea ? (
		<Control>
			<textarea
				type='text'
				value={text}
				onChange={taskChangeHandler}
				placeholder='Ввести заголовок для этой карточки'
			/>
			<div>
				<button onClick={addNewTodo}>Add</button>
				<img
					onClick={showAddHandler}
					src='https://img.icons8.com/ios/50/000000/delete-sign--v1.png'
				/>
			</div>
		</Control>
	) : (
		<div className='add_card_block'>
			<p onClick={showAddHandler}>+ Добавить карточку</p>
		</div>
	)

	return (
		<NewTodoControl>
			<div className='title'>
				<input type='text' defaultValue={title} />
			</div>
			<ul>
				{tasks.map((item) => (
					<NewMiniTodo
						key={item.taskId}
						text={item.text}
						columnName={title}
					/>
				))}
			</ul>

			{content}
		</NewTodoControl>
	)
}

const NewTodoControl = styled.div`
	width: 275px;
	height: auto;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	background-color: #ebecf0;
	margin-right: 10px;
	color: black;

	& .title {
		display: flex;
		align-items: center;
		padding: 4px;
		position: sticky;
		top: 0;
		background-color: inherit;
	}
	& .title input {
		width: 230px;
		padding: 5px 5px 5px 10px;
		background-color: inherit;
		color: #2f415f;
		outline: none;
		border: none;
		cursor: pointer;
		font-size: 15px;
		font-weight: 600;
	}
	& .title input:focus {
		transition: border ease-in 80ms;
		border: 2px solid #0079bf;
		border-radius: 3px;
		padding: 5px 5px 5px 9px;
		background-color: #ffffff;
	}
	& img {
		width: 20px;
		height: 20px;
		margin: 15px;
		cursor: pointer;
	}

	ul {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin: 20px;
		padding: 10px;
		li {
			width: 235px;
			background: white;
			color: black;
			padding: 5px;
			margin: 5px;
			border-radius: 4px;
			list-style: none;
			cursor: pointer;
			&:hover {
				transition: 0.5s;
				background: silver;
			}
		}
		& .add_card_block {
			width: 270px;
			padding: 5px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: black;
			cursor: pointer;
		}
	}
`
const Control = styled.div`
	background-color: #ebecf0;
	border-radius: 3px;
	height: auto;
	min-height: 32px;
	padding: 4px 0 0 3.5px;
	width: 270px;

	& textarea {
		background-color: #ebecf0;
		border-radius: 3px;
		padding: 4px;
		max-width: 230px;
		min-width: 230px;
		background: white;
		border: blue;
		max-height: 162px;
		min-height: 54px;
	}
	div {
		display: flex;
		align-items: center;
		padding: 4px 0;
	}
	button {
		width: 134px;
		height: 32px;
		border: none;
		background-color: #0079bf;
		border-radius: 3px;
		color: white;
		margin-right: 12px;
		cursor: pointer;
		font-family: 'Rubik', sans-serif;
	}

	& img {
		width: 20px;
		height: 20px;
		margin: 15px;
	}
`
export default Todo
