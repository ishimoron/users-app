export const generateRandomCoordinates = () => {
	const min = -90
	const max = 90
	return (Math.random() * (max - min) + min).toFixed(6)
}
