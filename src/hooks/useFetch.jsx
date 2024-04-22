import { useEffect, useState } from 'react'

export const useFetch = (url, options) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {
		if (!url) {
			throw new Error('Url is required')
		}

		const fetchData = async () => {
			setLoading(true)
			try {
				const response = await fetch(url, options)

				if (!response.ok) {
					throw new Error('Something wrong with your request...')
				}

				const responseData = await response.json()
				setData(responseData)
				setLoading(false)
				setError(null)
			} catch (e) {
				setError(e.message)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [url, options])

	return [data, loading, error]
}
