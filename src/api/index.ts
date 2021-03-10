import axios from 'axios'

const xhr = <T>(options: {
  url: string;
  method: 'get';
  defaultData: T;
}): Promise<T> =>  {
	return axios({
		...options,
	})
		.then(res => res.data)
		.catch(() => options.defaultData)
}

type financeApi = {
  quoteResponse: {
    error: null | boolean,
    result: { [propsName: string]: any }[]
  }
}

export const getStockInfoService = (list: string[]): Promise<{
  label: string;
  price: number;
  change: number;
  changePercent: string;
}[]> =>  {
	const idListStr = list.join(',')
	const url = 'https://cors-anywhere.herokuapp.com/https://tw.stock.yahoo.com/_td/api/resource/FinancePartnerService.quote;isFormatted=true;symbols='+ idListStr
	return xhr<financeApi>({
		url,
		method: 'get',
		defaultData: { quoteResponse: { error: true, result: [] } },
	})
		.then(res => res.quoteResponse.result.map(item => {
			return {
				label: item.symbol,
				price: item.regularMarketPrice.fmt,
				change: item.regularMarketChange.fmt,
				changePercent: item.regularMarketChangePercent.fmt,
			}
		}))
}