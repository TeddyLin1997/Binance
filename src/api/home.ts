import { xhr, mock } from './xhr'

mock.onGet('/home/stock').reply(200, [
	{ label: 'AAPL', price: 121.96, change: 1.98, changePercent: '1.65%' },
	{ label: 'MSFT', price: 237.13, change: 4.71, changePercent: '2.03%' },
	{ label: 'AMZN', price: 3113.59, change: -55.95, changePercent: '1.83%	' },
	{ label: 'GOOG', price: 2114.77, change: -59.74, changePercent: '2.91%' },
	{ label: 'FB', price: 273.88	, change: -31.54, changePercent: '3.39%' },
	{ label: 'TSLA', price: 699.60, change: 1.98, changePercent: '4.72%' },
	{ label: 'BRK', price: 260.91, change: -3.08, changePercent: '1.17%' },
	{ label: 'TSM', price: 120.58, change: 6.75, changePercent: '5.93%' },
	{ label: 'V', price: 226.15, change: 2.98, changePercent: '1.34%' },
	{ label: 'MA', price: 384.38, change: -2.68, changePercent: '0.70%' },
])
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