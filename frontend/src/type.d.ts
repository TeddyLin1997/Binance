interface Action<T>{
	type: string;
	value: T;
}

interface User {
  isLogin: boolean;
  uid: string;
}

interface Finance {
  label: string;
  price: number;
  change: number;
  changePercent: string;
}
