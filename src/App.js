import LoginPage from './components/loginPage/LoginPage'
import './App.css'
import TodoForm from './components/mainlayout/TodoForm'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import EnteringPage from './components/enteringPage/EnteringPage'
import NotFoundPage from './components/mainlayout/NotFoundPage'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<LoginPage />}></Route>
					<Route path='/TodoList' element={<TodoForm />}></Route>
					<Route path='/Enter' element={<EnteringPage />}></Route>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App;
