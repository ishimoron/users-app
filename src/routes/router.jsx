import { createBrowserRouter } from 'react-router-dom'
import SearchUser from '../components/SearchUser/SearchUser'
import User from '../components/User/User'
import Root from './Root'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
	},
	{
		path: 'users',
		element: <SearchUser />,
	},
	{
		path: 'users/:id',
		element: <User />,
	},
])
