import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Alert, Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { API_USER_URL } from '../../config'
import { useFetch } from '../../hooks/useFetch'
import UserAddingForm from '../UserAddingForm/UserAddingForm'
import UserEditForm from '../UserEditForm/UserEditForm'
import classes from './style.module.css'

const UserList = ({ searchValue, debounceSearch }) => {
	const [data, loading, error] = useFetch(API_USER_URL)
	const [users, setUsers] = useState([])
	const [isEdit, setIsEdit] = useState(false)
	const [isFormHidden, setIsFormHidden] = useState(true)
	const [selectedUser, setSelectedUser] = useState(null)

	useEffect(() => {
		setUsers(data)
	}, [data])

	const filteredUsers = users.filter(user => {
		const valueToFilter = searchValue
			? searchValue.toLowerCase()
			: debounceSearch.toLowerCase()
		return user.username.toLowerCase().includes(valueToFilter)
	})

	const deleteUser = id => {
		const deletedUser = users.filter(user => user.id !== id)
		setUsers(deletedUser)
	}

	const editUser = user => {
		setIsEdit(true)
		setSelectedUser(user)
	}

	const saveEditUser = editedUser => {
		const updatedUsers = users.map(user =>
			user.id === editedUser.id ? editedUser : user
		)
		setUsers(updatedUsers)
		setIsEdit(false)
	}

	const saveAddedUser = user => {
		setUsers(prevUsers => [...prevUsers, user])
	}

	const cancelEdit = () => {
		setIsEdit(false)
		setSelectedUser(null)
	}

	return (
		<div>
			<div>
				<div>
					{error && (
						<Alert variant='danger' className='my-3 text-center'>
							{error}
						</Alert>
					)}
				</div>
				<div>
					{!loading && filteredUsers.length === 0 && (
						<Alert variant='info' className='my-3 text-center font-bold'>
							Nothing found 😞
						</Alert>
					)}
				</div>
				<Button onClick={() => setIsFormHidden(isHidden => !isHidden)}>
					Show adding user form
				</Button>
				{!searchValue && !debounceSearch && !isFormHidden && (
					<UserAddingForm saveUser={saveAddedUser} users={users} />
				)}

				{loading && (
					<div className='text-center my-3'>
						<Spinner animation='border' role='status' />
					</div>
				)}

				<div className={classes.userList}>
					{filteredUsers.length > 0 &&
						filteredUsers.map(user => (
							<div key={user.id} className={classes.user}>
								<div className={classes.userHeader}>
									{isEdit && user.id === selectedUser?.id ? (
										<UserEditForm
											user={selectedUser}
											onSave={saveEditUser}
											onCancel={cancelEdit}
										/>
									) : (
										<>
											<div className={classes.userBasicInfo}>
												<div className={classes.userName}>
													<span className={classes.userInfoTitle}>
														Username:
													</span>
													<span className={classes.userInfoText}>
														{user.username}
													</span>
												</div>
												<div className={classes.userFullname}>
													<span className={classes.userInfoTitle}>Name:</span>
													{user.isAddedFormUser ? (
														<span className={classes.userInfoText}>
															{user.name}
														</span>
													) : (
														<Link to={`${user.id}`}>
															<span
																className={`${classes.userInfoText} ${classes.userLink}`}
															>
																{user.name}
															</span>
														</Link>
													)}
												</div>
											</div>
											<div className={classes.userData}>
												<div className={classes.userInfo}>
													<div className={classes.userInfoItem}>
														<span className={classes.userInfoTitle}>
															Email:
														</span>
														<span className={classes.userInfoText}>
															{user.email}
														</span>
													</div>
													<div className={classes.userInfoItem}>
														<span className={classes.userInfoTitle}>
															Website:
														</span>
														<span className={classes.userInfoText}>
															{user.website}
														</span>
													</div>
													<div className={classes.userInfoItem}>
														<span className={classes.userInfoTitle}>
															Address:
														</span>
														<span className={classes.userInfoText}>
															City: {user.address?.city}
														</span>
														<span className={classes.userInfoText}>
															Street: {user.address?.street}
														</span>
														<span className={classes.userInfoText}>
															Suite: {user.address?.suite}
														</span>
														<span className={classes.userInfoText}>
															Zipcode: {user.address?.zipcode}
														</span>
														<span className={classes.userInfoText}>
															Geo: {user.address?.geo?.lat}{' '}
															{user.address?.geo?.lng}
														</span>
													</div>
													<div className={classes.userInfoItem}>
														<span className={classes.userInfoTitle}>
															Company Info
														</span>
														<span className={classes.userInfoText}>
															Name: {user.company?.name}
														</span>
														<span className={classes.userInfoText}>
															Catch phrase: {user.company?.catchPhrase}
														</span>
														<span className={classes.userInfoText}>
															BS: {user.company?.bs}
														</span>
													</div>
													<div className={classes.userBtns}>
														<Button
															variant='primary'
															className={classes.btnSpace}
															onClick={() => editUser(user)}
														>
															Edit
														</Button>
														<Button
															variant='danger'
															onClick={() => deleteUser(user.id)}
														>
															Delete
														</Button>
													</div>
												</div>
											</div>
										</>
									)}
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	)
}

export default UserList

UserList.propTypes = {
	searchValue: PropTypes.string,
	debounceSearch: PropTypes.string,
}
