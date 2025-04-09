import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import './app.css';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AuthPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignUpPage />} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
