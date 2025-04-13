// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDWD8IzOZFaD_nFMZJKEA_7rH7o3BHcrCg',
	authDomain: 'recipe-sharing-app-f532b.firebaseapp.com',
	projectId: 'recipe-sharing-app-f532b',
	storageBucket: 'recipe-sharing-app-f532b.firebasestorage.app',
	messagingSenderId: '300517267985',
	appId: '1:300517267985:web:fe247dae7d43169f53afb0',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
