import PropTypes from 'prop-types'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { generateRandomCoordinates } from '../../utils/generateFunctions'
import classes from './style.module.css'

const UserAddingForm = ({ saveUser, users }) => {
	const [formData, setFormData] = useState({
		id: 0,
		isAddedFormUser: true,
		name: '',
		username: '',
		email: '',
		address: {
			street: '',
			suite: '',
			city: '',
			zipcode: '',
			geo: {
				lat: generateRandomCoordinates(),
				lng: generateRandomCoordinates(),
			},
		},
		phone: '',
		website: '',
		company: {
			name: '',
			catchPhrase: '',
			bs: '',
		},
	})

	const handleChange = e => {
		const { name, value } = e.target
		const updatedFormData = { ...formData }

		if (name.startsWith('address.')) {
			const addressProperty = name.split('.')[1]
			updatedFormData.address[addressProperty] = value
		} else if (name.startsWith('company.')) {
			const companyProperty = name.split('.')[1]
			updatedFormData.company[companyProperty] = value
		} else {
			updatedFormData[name] = value
		}

		setFormData(updatedFormData)
	}

	const handleSubmit = e => {
		e.preventDefault()
		const id = users.length + 1
		const newUser = { ...formData, id }
		saveUser(newUser)
		setFormData({
			id: 0,
			isAddedFormUser: true,
			name: '',
			username: '',
			email: '',
			address: {
				street: '',
				suite: '',
				city: '',
				zipcode: '',
				geo: {
					lat: generateRandomCoordinates(),
					lng: generateRandomCoordinates(),
				},
			},
			phone: '',
			website: '',
			company: {
				name: '',
				catchPhrase: '',
				bs: '',
			},
		})
	}

	return (
		<div>
			<Form onSubmit={handleSubmit} className={classes.formContainer}>
				<h1>Add user to the list</h1>
				<Form.Group controlId='username' className='my-2'>
					<Form.Label>Username</Form.Label>
					<Form.Control
						type='text'
						name='username'
						value={formData.username}
						onChange={handleChange}
						placeholder='Enter username'
						required
					/>
				</Form.Group>
				<Form.Group controlId='name' className='my-2'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='text'
						name='name'
						value={formData.name}
						onChange={handleChange}
						placeholder='Enter name'
						required
					/>
				</Form.Group>
				<Form.Group controlId='email' className='my-2'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						placeholder='Enter email'
						required
					/>
				</Form.Group>
				<Form.Group controlId='phone' className='my-2'>
					<Form.Label>Phone</Form.Label>
					<Form.Control
						type='phone'
						name='phone'
						value={formData.phone}
						onChange={handleChange}
						placeholder='Enter phone'
						required
					/>
				</Form.Group>
				<Form.Group controlId='website' className='my-2'>
					<Form.Label>Website</Form.Label>
					<Form.Control
						type='text'
						name='website'
						value={formData.website}
						onChange={handleChange}
						placeholder='Enter website'
						required
					/>
				</Form.Group>
				<Form.Group controlId='address.street' className='my-2'>
					<Form.Label>Street</Form.Label>
					<Form.Control
						type='text'
						name='address.street'
						value={formData.address.street}
						onChange={handleChange}
						placeholder='Enter street'
						required
					/>
				</Form.Group>
				<Form.Group controlId='address.suite' className='my-2'>
					<Form.Label>Suite</Form.Label>
					<Form.Control
						type='text'
						name='address.suite'
						value={formData.address.suite}
						onChange={handleChange}
						placeholder='Enter suite'
						required
					/>
				</Form.Group>
				<Form.Group controlId='address.city' className='my-2'>
					<Form.Label>City</Form.Label>
					<Form.Control
						type='text'
						name='address.city'
						value={formData.address.city}
						onChange={handleChange}
						placeholder='Enter city'
						required
					/>
				</Form.Group>
				<Form.Group controlId='address.zipcode' className='my-2'>
					<Form.Label>Zipcode</Form.Label>
					<Form.Control
						type='number'
						name='address.zipcode'
						value={formData.address.zipcode}
						onChange={handleChange}
						placeholder='Enter zipcode'
						required
					/>
				</Form.Group>
				<Form.Group controlId='company.name' className='my-2'>
					<Form.Label>Company Name</Form.Label>
					<Form.Control
						type='text'
						name='company.name'
						value={formData.company.name}
						onChange={handleChange}
						placeholder='Enter company name'
						required
					/>
				</Form.Group>
				<Form.Group controlId='company.catchPhrase' className='my-2'>
					<Form.Label>Company Catch Phrase</Form.Label>
					<Form.Control
						type='text'
						name='company.catchPhrase'
						value={formData.company.catchPhrase}
						onChange={handleChange}
						placeholder='Enter company catch phrase'
						required
					/>
				</Form.Group>
				<Form.Group controlId='company.bs' className='my-2'>
					<Form.Label>Company BS</Form.Label>
					<Form.Control
						type='text'
						name='company.bs'
						value={formData.company.bs}
						onChange={handleChange}
						placeholder='Enter company BS'
						required
					/>
				</Form.Group>

				<Button variant='outline-primary' type='submit' className='my-3 w-100'>
					Add user
				</Button>
			</Form>
		</div>
	)
}

UserAddingForm.propTypes = {
	saveUser: PropTypes.func,
	users: PropTypes.array,
}

export default UserAddingForm
