interface Action<T>{
	type: string;
	value: T;
}

interface User {
  isLogin: boolean;
  uid: string;
}
