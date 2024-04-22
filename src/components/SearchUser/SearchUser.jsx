import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useDebounce } from '../../hooks/useDebounce'
import UserList from '../UsersList/UserList'
import classes from './style.module.css'

const SearchUser = () => {
	const [searchValue, setSearchValue] = useState('')
	const [debounceValue, setDebounceValue] = useState('')
	const debouncedSearchValue = useDebounce(debounceValue, 1000)

	return (
		<div className={classes.mainWrapper}>
			<div className={classes.innerWrapper}>
				<Form.Group className='my-3'>
					<Form.Label>Filter without debounce</Form.Label>
					<Form.Control
						type='text'
						placeholder='Filter by username'
						value={searchValue || ''}
						onChange={e => setSearchValue(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='my-3'>
					<Form.Label>Filter with debounce</Form.Label>
					<Form.Control
						type='text'
						placeholder='Filter by username'
						value={debounceValue}
						onChange={e => setDebounceValue(e.target.value)}
					/>
				</Form.Group>
				<UserList
					searchValue={searchValue}
					debounceSearch={debouncedSearchValue}
				/>
			</div>
		</div>
	)
}

export default SearchUser
