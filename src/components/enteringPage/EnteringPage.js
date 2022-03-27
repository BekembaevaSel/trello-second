import React from 'react'
import Header from '../header/Header'
import Navbar from './Navbar'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { useNavigate } from 'react-router-dom'

const EnterPageControl = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    background-image: none;
 
}
`

const EnteringPage = () => {
	const navigate = useNavigate()
	const goCartPage = () => navigate('/TodoList', { replace: true })

	return (
		<>
			<Header />
			<Control>
				<div>
					<img src='https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/000000/external-time-user-interface-kmg-design-detailed-outline-kmg-design.png' />
					<span>Недавно просмотренное</span>
				</div>
				<div>
					<button onClick={goCartPage} className='board'>
						перейти к моей доске
					</button>
				</div>
			</Control>
			<Navbar />

			<EnterPageControl />
		</>
	)
}
const Control = styled.div`
	margin: 70px;
	& img {
		height: 25px;
		width: 25px;
		margin-right: 25px;
	}
	span {
		font-weight: bold;
		font-size: 16px;
	}
	& .board {
		margin: 60px;
		width: 250px;
		height: 200px;
		background-color: #0079bf;
		font-size: 20px;
		border-radius: 5px;
	}
	& .board:hover {
		box-shadow: rgb(0 0 0 / 20%) 0px 0px 5px 5px;
		transition: 0.5s;
		color: white;
	}
`
export default EnteringPage
