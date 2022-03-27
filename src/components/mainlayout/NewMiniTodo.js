import React, { Fragment, useState } from 'react'
import Modal from '../modal/Modal'

const NewMiniTodo = ({ text, columnName }) => {
	const [showModal, setShowModal] = useState(false)

	const showModalHandler = () => {
		setShowModal((prevState) => !prevState)
	}
	return (
		<Fragment>
			<li onClick={showModalHandler}>{text}</li>
			{showModal && (
				<Modal
					text={text}
					columnName={columnName}
					onCloseModal={showModalHandler}
				/>
			)}
		</Fragment>
	)
}

export default NewMiniTodo
