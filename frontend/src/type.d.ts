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

interface User {
  account: string;
  email: string;
  password: string;
}

interface UserInfo {
  id: number;
  account: string;
  token: string;
}
