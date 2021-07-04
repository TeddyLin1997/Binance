interface RootState {
  user: UserInfo;
}
interface ApiResponse<T> {
  error: boolean;
  result: T | string;
  status: number;
}
interface Crypto {
  name: string;
  close: string;
  eventTime: number;
  high: string;
  low: string;
  open: string;
  quoteVolume: string;
  volume: string;
  changePercent: number;
}
interface UserForm {
  account: string;
  email: string;
  password: string;
}
interface UserInfo {
  id: number;
  account: string;
  token: string;
}
interface TradeForm {
  name: string;
  price: string;
  amount: string;
}
interface WalletDetail {
  name: string;
  amount: number;
  cost: number;
}
interface CashFlowDetail {
  id: string;
  time: string;
  type: string;
  name: string;
  amount: number;
  cost: number;
}