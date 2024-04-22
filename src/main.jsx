import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Root from './routes/Root.jsx'
import { router } from './routes/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router}>
		<Root />
	</RouterProvider>
)
