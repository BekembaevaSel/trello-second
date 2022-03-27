import React from 'react'
import styled from 'styled-components'

const NavControl = styled.nav`
	grid-area: 'n';
	padding: 20px;
`

const DivControl = styled.div`

	margin: 20px;
	margin-top: -490px;
	margin-left: 100px;
	padding: 16px;
	text-align: left;
	max-width: 100%;
	line-height: 50px;

	& img {
		font-size: 16px;
		height: 20px;
		width: 20px;
		margin-right: 25px;
	}

	& a {
		color: black;
		font-weight: bold;
		cursor: pointer;
	}
	& a:hover {
		background-color: lightgray;
		color: #0079bf;
	}
	& span {
		color: rgba(9, 30, 66, 0.66);
		font-weight: 400;
		font-size: 12px;
		cursor: pointer;
	}
	main {
		grid-area: 'c';
	}
`

const Navbar = () => {
	return (
		<>
			<NavControl />
			<nav>
				<DivControl>
					<div>
						<img src='https://img.icons8.com/ios-filled/344/trello.png' />

						<a>Доски</a>
					</div>

					<div>
						<img src='https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/000000/external-trello-a-web-based-list-making-application-for-multi-platform-logo-shadow-tal-revivo.png' />

						<a>Шаблоны</a>
					</div>
					<div>
						<img src='https://img.icons8.com/ios-glyphs/30/000000/pulse.png' />
						<a>Главная страница</a>
					</div>
					<div>
						<h1>Рабочее пространство +</h1>
					</div>
					<div>
						<img src='https://img.icons8.com/ios-filled/344/trello.png' />

						<span>Доски</span>
					</div>
					<div>
						<img src='https://img.icons8.com/windows/32/000000/like--v1.png' />
						<span>Важные события</span>
					</div>
					<div>
						<img src='https://img.icons8.com/ios/50/000000/four-squares.png' />
						<span>Представления</span>
					</div>
					<div>
						<img src='https://img.icons8.com/ios-filled/50/000000/group-foreground-selected.png' />
						<span>Участники</span>
					</div>
					<div>
						<img src='https://img.icons8.com/ios/50/000000/settings--v1.png' />
						<span>Настройки</span>
					</div>
				</DivControl>
			</nav>
		</>
	)
}

export default Navbar
