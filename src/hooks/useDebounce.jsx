import { useEffect, useState } from 'react'

export const useDebounce = (value, delay) => {
	const [debounceValue, setDebounceValue] = useState(value)

	useEffect(() => {
		const debounceHandler = setTimeout(() => {
			setDebounceValue(value)
		}, delay)

		return () => {
			clearTimeout(debounceHandler)
		}
	}, [value, delay])

	return debounceValue
}
