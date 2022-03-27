import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const FormControl = createGlobalStyle`
     body{
        margin: 0;
	    padding: 0;
        background-image: url('https://images.unsplash.com/photo-1647189892812-738773e5e1f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
        background-attachment: fixed;
	    background-repeat: no-repeat;
	    background-size: cover;
    }
	& img {
		width: 40px;
		height: 40px;
	}
	& header {
		display: flex;
		justify-content: space-around;
		font-family: inherit;
		font-size: 14px;
		font-weight: 400;
		color: white;
		background-color: #535c65; 
	}
    &.icons {
        width: 15px;
        height: 15px;
		cursor: pointer;
    }
    & button {
        width: 150px;
        height: 32px;
        margin: 10px;
        border-radius: 3px;
        border: none;
		background-color: #535c65; 
		color: white;
    }
    & input {
        background-color: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.25);
        box-sizing: border-box;
        color: white;
        float: left;
        font-size: 14px;
        height: 32px;
        margin: 10px;
        outline: none;
        width: 250px;
    }
	& button:hover {
	 cursor: pointer;
     background-color: white;
	 color: darkgray
	}
`
const Header = () => {
	return (
		<>
			<FormControl />
			<div>
				<header>
					<img src='https://img.icons8.com/ios-filled/344/trello.png' />
					<div>
						<button>Рабочее пространство</button>
						<img
							className='icons'
							src='https://img.icons8.com/small/16/FFFFFF/expand-arrow.png'
						/>
					</div>
					<div>
						<button> Недавнее</button>
						<img
							className='icons'
							src='https://img.icons8.com/small/16/FFFFFF/expand-arrow.png'
						/>
					</div>
					<div>
						<button>В избранном</button>
						<img
							className='icons'
							src='https://img.icons8.com/small/16/FFFFFF/expand-arrow.png'
						/>
					</div>
					<div>
						<button>Шаблоны</button>
						<img
							className='icons'
							src='https://img.icons8.com/small/16/FFFFFF/expand-arrow.png'
						/>
					</div>
					<div>
						<button>Создать</button>
					</div>
					<div>
						<input placeholder='Поиск' />
					</div>
				</header>
			</div>
		</>
	)
}

export default Header
