import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const ProtectedRoute = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => unsubscribe;
	}, []);

	if (loading)
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: '100vh' }}>
				<p>Loading...</p>
			</div>
		);
	if (!user) return <Navigate to="/" />;

	return children;
};

export default ProtectedRoute;
