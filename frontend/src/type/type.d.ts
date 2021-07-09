interface RootState {
  user: UserInfo;
  balance: number;
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

interface BuyForm {
  name: string;
  amount: number;
  cost: number;
}

interface SellForm {
  name: string;
  amount: number;
  total: number;
}

interface WalletDetail {
  name: string;
  amount: number;
  cost: number;
}

interface CashFlowDetail {
  id: string;
  type: 1 | 2;
  name: string;
  amount: number;
  cost: number;
  time: number;
}