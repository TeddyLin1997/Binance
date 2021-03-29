import { xhr, mock, getRandom } from './xhr'

mock.onGet('/home/stock').reply(200, () => {
	return [
		{ label: 'AAPL', oldPrice: 121.96, change: getRandom(12), changePercent: ''},
		{ label: 'MSFT', oldPrice: 237.13, change: getRandom(23), changePercent: ''},
		{ label: 'AMZN', oldPrice: 3113.59, change: getRandom(311), changePercent: ''},
		{ label: 'GOOG', oldPrice: 2114.77, change: getRandom(210), changePercent: ''},
		{ label: 'FB', oldPrice: 273.88, change: getRandom(27), changePercent: ''},
		{ label: 'TSLA', oldPrice: 699.60, change: getRandom(70), changePercent: ''},
		{ label: 'BRK', oldPrice: 260.91, change: getRandom(26), changePercent: ''},
		{ label: 'TSM', oldPrice: 120.58, change: getRandom(20), changePercent: ''},
		{ label: 'V', oldPrice: 226.15, change: getRandom(22), changePercent: ''},
		{ label: 'MA', oldPrice: 384.38, change: getRandom(38), changePercent: ''},
	].map(item => ({
		...item,
		price: (item.oldPrice + item.change).toFixed(2),
		changePercent: `${((item.change) / item.oldPrice * 100).toFixed(2)}%`,
	}))
})
export const getHomeStockService = (): Promise<Finance[]> =>  {
	const url = '/home/stock'
	return xhr({
		url,
		method: 'get',
		defaultData: [],
	})
		.then(res => res)
}

mock.onGet('/home/crypto').reply(200, [
	{ label: 'Bitcoin', price: 56915.63, change: -895.52, changePercent: '1.59%' },
	{ label: 'Ethereum', price: 1811.21, change: -17.28, changePercent: '0.97%' },
	{ label: 'Binance', price: 282.29, change: 7.93, changePercent: '2.66%' }
])
export const getHomeCryptoService = (): Promise<Finance[]> =>  {
	const url = '/home/crypto'
	return xhr({
		url,
		method: 'get',
		defaultData: [],
	})
		.then(res => res)
}