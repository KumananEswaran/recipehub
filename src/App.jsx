import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import './app.css';
import HomePage from './pages/HomePage';
import MyRecipe from './pages/MyRecipe';
import RecipePage from './pages/RecipePage';
import AddRecipe from './pages/AddRecipe';
import Favorite from './pages/Favorite';
import Claude from './pages/Claude';
import Toast from './components/Toast';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<AuthPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignUpPage />} />
					<Route
						path="/home"
						element={
							<ProtectedRoute>
								<HomePage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/recipe/:id"
						element={
							<ProtectedRoute>
								<RecipePage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/my-recipe"
						element={
							<ProtectedRoute>
								<MyRecipe />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/add-recipe"
						element={
							<ProtectedRoute>
								<AddRecipe />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/favorite"
						element={
							<ProtectedRoute>
								<Favorite />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/claude"
						element={
							<ProtectedRoute>
								<Claude />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
			<Toast />
		</>
	);
};
export default App;
