const { getPaginationInfo } = require('../../../src/utils/routing')

describe('getPaginationInfo', () => {
	test('should retrieve info while passing page and limit', () => {
		const query = {
			page: 2,
			limit: 20,
		}
		const paginationInfo = getPaginationInfo(query)

		expect(paginationInfo).toStrictEqual({
			...query,
			startIndex: 20,
			params: {},
		})
	})

	test('should retrieve info while not passing page and limit', () => {
		const query = {}
		const paginationInfo = getPaginationInfo(query)

		expect(paginationInfo).toStrictEqual({
			page: 1,
			limit: 10,
			startIndex: 0,
			params: {},
		})
	})

	test('should retrieve info while passing params', () => {
		const query = {
			stat: 180,
			atk: 290,
			name: 'Sample',
		}
		const paginationInfo = getPaginationInfo(query)

		expect(paginationInfo).toStrictEqual({
			page: 1,
			limit: 10,
			startIndex: 0,
			params: query,
		})
	})

	test('should retrieve info while passing all info', () => {
		const query = {
			page: 2,
			limit: 20,
			stat: 180,
			atk: 290,
			name: 'Sample',
		}
		const paginationInfo = getPaginationInfo(query)

		expect(paginationInfo).toStrictEqual({
			page: 2,
			limit: 20,
			startIndex: 20,
			params: {
				stat: 180,
				atk: 290,
				name: 'Sample',
			},
		})
	})
})
