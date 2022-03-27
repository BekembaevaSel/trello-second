import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/todo-slice'
import Header from '../header/Header'
import { useSelector } from 'react-redux'
import Todo from './Todo'
import { DialogLeavingPage } from '../DialogLeavingPage'
import { useNavigatingAway } from '../hooks/useNavigatingAway'

const TodoForm = () => {
	const todos = useSelector((state) => state.todos.columnTodo)
	const dispatch = useDispatch()
	const [value, setvalue] = useState('')
	const [showTodoAddcart, setShowTodoAddCart] = useState(false)
	const [showLeavingPage, setShowLeavingPage] = useState(false)
	const [showDialogLeavingPage, confirmNavigation, cancelNavigation] =
		useNavigatingAway(showLeavingPage)

	const inputChangeHandler = (e) => {
		setvalue(e.target.value)
		if (e.target.value !== '') setShowLeavingPage(true)
		else setShowLeavingPage(false)
	}

	const onSubmit = (event) => {
		event.preventDefault()
		if (value.trim().length > 0) {
			const columnData = {
				title: value,
				id: Math.random().toString(),
				tasks: [],
			}
			dispatch(addTodo(columnData))
			setvalue('')
			setShowTodoAddCart(false)
		}
	}

	const toggleTodoAddCart = () => {
		setShowTodoAddCart((prevState) => !prevState)
		setShowTodoAddCart(true)
	}

	const content = showTodoAddcart ? (
		<AddControlBlock>
			<input
				type='text'
				onChange={inputChangeHandler}
				value={value}
				placeholder='Ввести заголовок списка'
			/>
			<div>
				<button onClick={onSubmit}>Добавить список</button>
				<img
					onClick={() => setShowTodoAddCart(false)}
					src='https://img.icons8.com/ios/50/000000/delete-sign--v1.png'
				/>
			</div>
		</AddControlBlock>
	) : (
		<SecondBlockStyle>
			<span onClick={toggleTodoAddCart}> &#43; Добавить список</span>
		</SecondBlockStyle>
	)
	return (
		<>
			<Header />
			{showDialogLeavingPage && (
				<DialogLeavingPage
					showDialog={showLeavingPage}
					setShowDialog={setShowLeavingPage}
					confirmNavigation={confirmNavigation}
					cancelNavigation={cancelNavigation}
				/>
			)}

			<StyledCard>
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						id={todo.id}
						title={todo.title}
						tasks={todo.tasks}
					/>
				))}

				{content}
			</StyledCard>
		</>
	)
}

const AddControlBlock = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 100%;
	margin-top: 0em;
	background-color: #ebecf0;
	border-radius: 3px;
	width: 270px;
	opacity: 40ms;
	margin: 20px;
	margin-left: 12px;
	input {
		width: 263px;
		height: 36px;
		padding: 7px;
		border: 2px solid #0079bf;
		border-radius: 3px;
		outline: none;
		color: darkgray;
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
	}
	img {
		width: 20px;
		height: 20px;
		margin: 15px;
	}
`
const SecondBlockStyle = styled.div`
	& {
		display: flex;
		align-items: center;
		width: 272px;
		background-color: #ffffff3d;
		border-radius: 5px;
		cursor: pointer;
		height: auto;
		min-height: 32px;
		opacity: 40ms;
		margin: 20px;
		color: white;
		text-align: center;
		padding: 6px 8px;
	}
`

const StyledCard = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: start;
	margin: 25px;
	color: white;
	width: 100%;
`

export default TodoForm
