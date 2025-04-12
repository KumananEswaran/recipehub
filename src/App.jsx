import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import './app.css';
import HomePage from './pages/HomePage';
import MyRecipe from './pages/MyRecipe';
import RecipePage from './pages/RecipePage';
import AddRecipe from './pages/AddRecipe';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AuthPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/recipe/:id" element={<RecipePage />} />
				<Route path="/my-recipe" element={<MyRecipe />} />
				<Route path="/add-recipe" element={<AddRecipe />} />
			</Routes>
		</BrowserRouter>
	);
};
export default App;
