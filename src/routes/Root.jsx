import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import '../App.css'

const Root = () => {
	const navigate = useNavigate()

	useEffect(() => {
		navigate('/users')
	}, [])

	return (
		<div>
			<Outlet />
		</div>
	)
}

export default Root
