import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
export const DialogLeavingPage = ({
	showDialog,
	setShowDialog,
	cancelNavigation,
	confirmNavigation,
}) => {
	const handleDialogClose = () => {
		setShowDialog(false)
	}

	return (
		<div>
			<Dialog
				open={showDialog}
				onClose={handleDialogClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>
					{'There are some changes.'}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						If you proceed your changes will be lost. Are you sure
						you want to proceed?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={cancelNavigation}>No</Button>
					<Button onClick={confirmNavigation} autoFocus>
						Yes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}
