import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyBJkLHymVm0-8-LY5g4RhkfAQ4hOO4jq74',
	authDomain: 'virtual-exchange-ec2a0.firebaseapp.com',
	projectId: 'virtual-exchange-ec2a0',
	storageBucket: 'virtual-exchange-ec2a0.appspot.com',
	messagingSenderId: '547325403978',
	appId: '1:547325403978:web:48c2e1168d08e1532e97b3'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

type User = {
  email: string,
  password: string,
}

export const registerUser = (formData: User): void => {
	auth.createUserWithEmailAndPassword(formData.email, formData.password)
		.then(res => {
			console.log(res)
			if (res.user !== null) localStorage.setItem('uid', res.user.uid)
		})
		.catch(err => console.log('註冊失敗', err))
}

export const loginUser = (formData: User): void => {
	auth.signInWithEmailAndPassword(formData.email, formData.password)
		.then(res => console.log(res))
		.catch(err => console.log('登入失敗', err))
}
