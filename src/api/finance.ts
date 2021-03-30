import { xhr, mock, getRandom } from './xhr'

mock.onGet('/finance/stock').reply(200, [
	{ label: 'AAPL', oldPrice: 121.96, change: getRandom(12), changePercent: '' },
	{ label: 'MSFT', oldPrice: 237.13, change: getRandom(23), changePercent: '' },
	{ label: 'AMZN', oldPrice: 3113.59, change: getRandom(311), changePercent: ''},
	{ label: 'GOOG', oldPrice: 2114.77, change: getRandom(211), changePercent: '' },
	{ label: 'GOOGL', oldPrice: 2100.54, change: getRandom(210), changePercent: '' },
	{ label: 'FB', oldPrice: 273.88, change: getRandom(273), changePercent: '' },
	{ label: 'TSLA', oldPrice: 699.60, change: getRandom(70), changePercent: '' },
	{ label: 'BABA', oldPrice: 240.80, change: getRandom(24), changePercent: ''} ,
	{ label: 'BRK', oldPrice: 260.91, change: getRandom(26), changePercent: '' },
	{ label: 'TSM', oldPrice: 120.58, change: getRandom(12), changePercent: '' },
	{ label: 'V', oldPrice: 226.15, change: getRandom(22), changePercent: '' },
	{ label: 'JPM', oldPrice: 154.32, change: getRandom(15), changePercent: '' },
	{ label: 'JNJ', oldPrice: 159.14, change: getRandom(15), changePercent: '' },
	{ label: 'MA', oldPrice: 384.38, change: getRandom(38), changePercent: '' },
	{ label: 'WMT', oldPrice: 132.13, change: getRandom(13), changePercent: '' },
	{ label: 'DIS', oldPrice: 196.75, change: getRandom(19), changePercent: '' },
	{ label: 'UNH', oldPrice: 353.10, change: getRandom(35), changePercent: '' },
	{ label: 'NVDA', oldPrice: 519.74, change: getRandom(51), changePercent: '' },
	{ label: 'BAC', oldPrice: 37.24, change: getRandom(4), changePercent: '' },
	{ label: 'PG', oldPrice: 126.91, change: getRandom(12), changePercent: '' },
	{ label: 'PYPL', oldPrice: 253.83, change: getRandom(25), changePercent: '' },
	{ label: 'HD', oldPrice: 268.85, change: getRandom(26), changePercent: '' },
	{ label: 'EDU', oldPrice: 168.72, change: getRandom(16), changePercent: '' },
	{ label: 'CMCSA', oldPrice: 56.89, change: getRandom(5), changePercent: '' },
	{ label: 'XOM', oldPrice: 61.31, change: getRandom(6), changePercent: '' },
	{ label: 'INTC', oldPrice: 63.31, change: getRandom(6), changePercent: '' },
	{ label: 'NFLX', oldPrice: 523.06, change: getRandom(52), changePercent: '' },
	{ label: 'VZ', oldPrice: 55.51, change: getRandom(5), changePercent: '' },
	{ label: 'NKE', oldPrice: 141.19, change: getRandom(14), changePercent: '' },
	{ label: 'KO', oldPrice: 50.88, change: getRandom(5), changePercent: '' },
	{ label: 'ASML', oldPrice: 544.40, change: getRandom(54), changePercent: '' },
	{ label: 'ADBE', oldPrice: 451.06, change: getRandom(45), changePercent: '' },
	{ label: 'CVX', oldPrice: 111.19, change: getRandom(11), changePercent: '' },
	{ label: 'TM', oldPrice: 150.36, change: getRandom(15), changePercent: '' },
	{ label: 'T', oldPrice: 29.54, change: getRandom(3), changePercent: '' },
	{ label: 'ABT', oldPrice: 117.52, change: getRandom(11), changePercent: '' },
	{ label: 'CSCO', oldPrice: 48.80, change: getRandom(5), changePercent: '' },
	{ label: 'ORCL', oldPrice: 67.41, change: getRandom(6), changePercent: '' },
	{ label: 'CRM', oldPrice: 215.95, change: getRandom(21), changePercent: '' },
	{ label: 'LLY', oldPrice: 205.21, change: getRandom(20), changePercent: '' },
	{ label: 'PFE', oldPrice: 34.71, change: getRandom(3), changePercent: '' },
	{ label: 'ABBV', oldPrice: 107.87, change: getRandom(10), changePercent: '' },
	{ label: 'NVS', oldPrice: 84.74, change: getRandom(8), changePercent: '' },
	{ label: 'MRK', oldPrice: 74.63, change: getRandom(7), changePercent: '' },
	{ label: 'AVGO', oldPrice: 453.69, change: getRandom(45), changePercent: '' },
	{ label: 'PEP', oldPrice: 133.22, change: getRandom(13), changePercent: '' },
	{ label: 'TMO', oldPrice: 460.52, change: getRandom(46), changePercent: '' },
	{ label: 'ACN', oldPrice: 266.37, change: getRandom(26), changePercent: '' },
	{ label: 'TXN', oldPrice: 174.95, change: getRandom(17), changePercent: '' },
	{ label: 'WFC', oldPrice: 38.88, change: getRandom(4), changePercent: '' },
	{ label: 'MDT', oldPrice: 118.10, change: getRandom(11), changePercent: '' },
	{ label: 'MCD', oldPrice: 211.57, change: getRandom(21), changePercent: '' },
	{ label: 'TMUS', oldPrice: 125.99, change: getRandom(12), changePercent: '' },
	{ label: 'DHR', oldPrice: 219.22, change: getRandom(21), changePercent: '' },
	{ label: 'C', oldPrice: 73.31, change: getRandom(7), changePercent: '' },
	{ label: 'HDB', oldPrice: 83.75, change: getRandom(8), changePercent: '' },
	{ label: 'QCOM', oldPrice: 131.74, change: getRandom(13), changePercent: '' },
	{ label: 'SAP', oldPrice: 126.85, change: getRandom(12), changePercent: '' },
	{ label: 'HON', oldPrice: 212.50, change: getRandom(21), changePercent: '' },
	{ label: 'BA', oldPrice: 252.00, change: getRandom(25), changePercent: '' },
	{ label: 'NEE', oldPrice: 74.86, change: getRandom(7), changePercent: '' },
	{ label: 'COST', oldPrice: 328.65, change: getRandom(32), changePercent: '' },
	{ label: 'UPS', oldPrice: 167.24, change: getRandom(16), changePercent: '' },
	{ label: 'UNP', oldPrice: 214.52, change: getRandom(21), changePercent: '' },
	{ label: 'UL', oldPrice: 54.59, change: getRandom(5), changePercent: '' },
	{ label: 'SHOP', oldPrice: 1142.24, change: getRandom(11), changePercent: '' },
	{ label: 'LIN', oldPrice: 267.37, change: getRandom(26), changePercent: '' },
	{ label: 'BMY', oldPrice: 60.35, change: getRandom(6), changePercent: '' },
	{ label: 'PM', oldPrice: 86.63, change: getRandom(8), changePercent: '' },
	{ label: 'AMGN', oldPrice: 231.17, change: getRandom(23), changePercent: '' },
	{ label: 'RY', oldPrice: 92.74, change: getRandom(9), changePercent: '' },
	{ label: 'MS', oldPrice: 83.25, change: getRandom(8), changePercent: '' },
	{ label: 'AZN', oldPrice: 48.67, change: getRandom(4), changePercent: '' },
	{ label: 'PDD', oldPrice: 162.40, change: getRandom(16), changePercent: '' },
	{ label: 'TOT', oldPrice: 49.63, change: getRandom(5), changePercent: '' },
	{ label: 'NVO', oldPrice: 71.87, change: getRandom(7), changePercent: '' },
	{ label: 'HSBC', oldPrice: 29.58, change: getRandom(3), changePercent: '' },
	{ label: 'SBUX', oldPrice: 107.32, change: getRandom(10), changePercent: '' },
	{ label: 'SNE', oldPrice: 103.20, change: getRandom(10), changePercent: '' },
	{ label: 'LOW', oldPrice: 170.75, change: getRandom(17), changePercent: '' },
	{ label: 'CHTR', oldPrice: 624.23, change: getRandom(62), changePercent: '' },
	{ label: 'SNY', oldPrice: 47.84, change: getRandom(5), changePercent: '' },
	{ label: 'CAT', oldPrice: 219.76, change: getRandom(21), changePercent: '' },
	{ label: 'SCHW', oldPrice: 66.41, change: getRandom(6), changePercent: '' },
	{ label: 'AXP', oldPrice: 147.75, change: getRandom(14), changePercent: '' },
	{ label: 'ABNB', oldPrice: 197.87, change: getRandom(19), changePercent: '' },
	{ label: 'TD', oldPrice: 64.89, change: getRandom(6), changePercent: '' },
	{ label: 'JD', oldPrice: 90.01, change: getRandom(9), changePercent: '' },
	{ label: 'GS', oldPrice: 342.10, change: getRandom(34), changePercent: '' },
	{ label: 'RTX', oldPrice: 77.05, change: getRandom(8), changePercent: '' },
	{ label: 'DE', oldPrice: 364.46, change: getRandom(36), changePercent: '' },
	{ label: 'IBM', oldPrice: 127.14, change: getRandom(12), changePercent: '' },
	{ label: 'BLK', oldPrice: 722.12, change: getRandom(72), changePercent: '' },
	{ label: 'SQ', oldPrice: 241.72, change: getRandom(24), changePercent: '' },
	{ label: 'UBER', oldPrice: 58.95, change: getRandom(6), changePercent: '' },
	{ label: 'INTU', oldPrice: 399.17, change: getRandom(39), changePercent: '' },
	{ label: 'GE', oldPrice: 12.27, change: getRandom(2), changePercent: '' },
	{ label: 'AMAT', oldPrice: 117.19, change: getRandom(11), changePercent: '' },
].map(item => ({
	...item,
	price: (item.oldPrice + item.change).toFixed(2),
	changePercent: `${((item.change) / item.oldPrice * 100).toFixed(2)}%`,
})))
export const getAllStockService = (): Promise<Finance[]> =>  {
	const url = '/finance/stock'
	return xhr({
		url,
		method: 'get',
		defaultData: [],
	})
		.then(res => res)
}

mock.onGet('/finance/crypto').reply(200, [
	{ label: 'Bitcoin', oldPrice: 57050.87, change: getRandom(5705), changePercent: '' },
	{ label: 'Ethereum', oldPrice: 1809.87, change: getRandom(180), changePercent: '' },
	{ label: 'Binance', oldPrice: 281.24, change: getRandom(30), changePercent: '' },
	{ label: 'Teth', oldPrice: 1.04, change: getRandom(0.5), changePercent: '' },
	{ label: 'Cardano', oldPrice: 1.12, change: getRandom(1), changePercent: '' },
	{ label: 'Polkadot', oldPrice: 36.72, change: getRandom(3), changePercent: '' },
	{ label: 'XRP', oldPrice: 0.77, change: getRandom(1), changePercent: '' },
	{ label: 'Uniswap', oldPrice: 31.41, change: getRandom(3), changePercent: '' },
	{ label: 'Litecoin', oldPrice: 208.12, change: getRandom(20), changePercent: '' },
	{ label: 'ChainLink', oldPrice: 29.72, change: getRandom(3), changePercent: '' },
	{ label: 'Stellar', oldPrice: 0.40, change: getRandom(1), changePercent: '' },
	{ label: 'Wrapped', oldPrice: 56918.78, change: getRandom(5611), changePercent: '' },
	{ label: 'Theta', oldPrice: 7.39, change: getRandom(1), changePercent: '' },
	{ label: 'Dogecoin', oldPrice: 0.05, change: getRandom(0.05), changePercent: '' },
	{ label: 'Aave', oldPrice: 394., change: getRandom(40), changePercent: '' },
	{ label: 'Crypto', oldPrice: 0.18, change: getRandom(1), changePercent: '' },
	{ label: 'LUNA', oldPrice: 11.67, change: getRandom(2), changePercent: '' },
	{ label: 'VeChain', oldPrice: 0.07, change: getRandom(1), changePercent: '' },
	{ label: 'Sola', oldPrice: 16.23, change: getRandom(2), changePercent: '' },
	{ label: 'Creditcoin', oldPrice: 7.55, change: getRandom(8), changePercent: '' },
	{ label: 'Cosmos', oldPrice: 19.01, change: getRandom(2), changePercent: '' },
	{ label: 'Monero', oldPrice: 222.75, change: getRandom(20), changePercent: '' },
	{ label: 'Avalanche', oldPrice: 30.59, change: getRandom(3), changePercent: '' },
	{ label: 'IOTA', oldPrice: 1.39, change: getRandom(2), changePercent: '' },
	{ label: 'EOS', oldPrice: 3.9, change: getRandom(4), changePercent: '' },
	{ label: 'TRON', oldPrice: 0.05, change: getRandom(1), changePercent: '' },
	{ label: 'Silverway', oldPrice: 24.33, change: getRandom(3), changePercent: '' },
	{ label: 'FTX', oldPrice: 37.5, change: getRandom(4), changePercent: '' },
	{ label: 'Tezos', oldPrice: 5.3, change: getRandom(1), changePercent: '' },
	{ label: 'Huobi', oldPrice: 15.53, change: getRandom(2), changePercent: '' },
	{ label: 'NEO', oldPrice: 41., change: getRandom(4), changePercent: '' },
	{ label: 'Kusama', oldPrice: 328.67, change: getRandom(33), changePercent: '' },
	{ label: 'Algorand', oldPrice: 1.07, change: getRandom(1), changePercent: '' },
	{ label: 'Bridge', oldPrice: 0.33, change: getRandom(1), changePercent: '' },
	{ label: 'Dai', oldPrice: 1.11, change: getRandom(1), changePercent: '' },
	{ label: 'Chiliz', oldPrice: 0.46, change: getRandom(1), changePercent: '' },
	{ label: 'Elrond', oldPrice: 149., change: getRandom(15), changePercent: '' },
	{ label: 'SushiSwap', oldPrice: 19.3, change: getRandom(2), changePercent: '' },
	{ label: 'Filecoin', oldPrice: 42.3, change: getRandom(4), changePercent: '' },
].map(item => ({
	...item,
	price: (item.oldPrice + item.change).toFixed(2),
	changePercent: `${((item.change) / item.oldPrice * 100).toFixed(2)}%`,
})))
export const getAllCryptoService = (): Promise<Finance[]> =>  {
	const url = '/finance/crypto'
	return xhr({
		url,
		method: 'get',
		defaultData: [],
	})
		.then(res => res)
}