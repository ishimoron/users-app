import { Alert, Button, ListGroup, Spinner } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { API_USER_URL } from '../../config'
import { useFetch } from '../../hooks/useFetch'
import classes from './style.module.css'

const User = () => {
	const { id } = useParams()
	const [data, loading, error] = useFetch(`${API_USER_URL}/${id}`)

	return (
		<>
			<div className={classes.userContainer}>
				{loading && (
					<Spinner animation='border' role='status' className='my-3' />
				)}
				{error && (
					<Alert variant='danger' className='my-3 text-center'>
						{error}
					</Alert>
				)}
				<div className={classes.userWrapper}>
					<ListGroup as='ol' numbered>
						<ListGroup.Item as='li'>Id: {data.id}</ListGroup.Item>
						<ListGroup.Item as='li'>Name: {data.name}</ListGroup.Item>
						<ListGroup.Item as='li'>Username: {data.username}</ListGroup.Item>
						<ListGroup.Item as='li'>Email: {data.email}</ListGroup.Item>
						<ListGroup.Item as='li'>Phone: {data.phone}</ListGroup.Item>
						<ListGroup.Item as='li'>Website: {data.website}</ListGroup.Item>
						<ListGroup.Item as='li'>
							<span className='d-block'>City: {data.address?.city}</span>
							<span className='d-block'>Street: {data.address?.street}</span>
							<span className='d-block'>Suite: {data.address?.suite}</span>
							<span className='d-block'>Zipcode: {data.address?.zipcode}</span>
							<span className='d-block'>
								Geo: {data.address?.geo?.lat} {data.address?.geo?.lng}
							</span>
						</ListGroup.Item>
						<ListGroup.Item as='li'>
							<span className='d-block'>
								Company name: {data.company?.name}
							</span>
							<span className='d-block'>
								Catch phrase: {data.company?.catchPhrase}
							</span>
							<span className='d-block'>BS: {data.company?.bs}</span>
						</ListGroup.Item>
					</ListGroup>

					<Link to='/users'>
						<Button className='my-3' variant='outline-primary'>
							Back to all users
						</Button>
					</Link>
				</div>
			</div>
		</>
	)
}

export default User
