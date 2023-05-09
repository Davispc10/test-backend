const getPaginationInfo = (query) => {
	const page = parseInt(query.page) || 1
	const limit = parseInt(query.limit) || 10

	const startIndex = (page - 1) * limit

	const params = { ...query }
	delete params.page
	delete params.limit

	return { limit, startIndex, page, params }
}

module.exports = { getPaginationInfo }
