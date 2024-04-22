import PropTypes from 'prop-types'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
const UserEditForm = ({ user, onSave, onCancel }) => {
	const [editedUser, setEditedUser] = useState(user)

	const handleChange = e => {
		const { name, value } = e.target
		setEditedUser(prevUser => ({
			...prevUser,
			[name]: value,
			address: {
				...prevUser.address,
				[name]: value,
			},
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()
		onSave(editedUser)
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId='username'>
				<Form.Label>Username</Form.Label>
				<Form.Control
					type='text'
					name='username'
					value={editedUser.username}
					onChange={handleChange}
					placeholder='Enter username'
					required
				/>
			</Form.Group>
			<Form.Group controlId='name'>
				<Form.Label>Name</Form.Label>
				<Form.Control
					type='text'
					name='name'
					value={editedUser.name}
					onChange={handleChange}
					placeholder='Enter name'
					required
				/>
			</Form.Group>
			<Form.Group controlId='email'>
				<Form.Label>Email</Form.Label>
				<Form.Control
					type='email'
					name='email'
					value={editedUser.email}
					onChange={handleChange}
					placeholder='Enter email'
					required
				/>
			</Form.Group>
			<Form.Group controlId='website'>
				<Form.Label>Website</Form.Label>
				<Form.Control
					type='text'
					name='website'
					value={editedUser.website}
					onChange={handleChange}
					placeholder='Enter website'
					required
				/>
			</Form.Group>
			<Form.Group controlId='city'>
				<Form.Label>City</Form.Label>
				<Form.Control
					type='text'
					name='city'
					value={editedUser.address?.city}
					onChange={handleChange}
					placeholder='Enter city'
					required
				/>
			</Form.Group>
			<Form.Group controlId='street'>
				<Form.Label>Street</Form.Label>
				<Form.Control
					type='text'
					name='street'
					value={editedUser.address?.street}
					onChange={handleChange}
					placeholder='Enter street'
					required
				/>
			</Form.Group>
			<Form.Group controlId='suite'>
				<Form.Label>Suite</Form.Label>
				<Form.Control
					type='text'
					name='suite'
					value={editedUser.address?.suite}
					onChange={handleChange}
					placeholder='Enter street'
					required
				/>
			</Form.Group>
			<Form.Group controlId='zipcode'>
				<Form.Label>Zipcode</Form.Label>
				<Form.Control
					type='text'
					name='zipcode'
					value={editedUser.address?.zipcode}
					onChange={handleChange}
					placeholder='Enter zipcode'
					required
				/>
			</Form.Group>
			<Button variant='outline-primary' type='submit' className='my-3'>
				Save
			</Button>
			<Button
				variant='outline-secondary'
				onClick={onCancel}
				className='mx-2 my-3'
			>
				Cancel
			</Button>
		</Form>
	)
}
UserEditForm.propTypes = {
	user: PropTypes.object,
	onSave: PropTypes.func,
	onCancel: PropTypes.func,
}
export default UserEditForm
