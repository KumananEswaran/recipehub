import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { Spinner } from 'react-bootstrap';

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
			<div className="text-center mt-4">
				<Spinner animation="border" role="status" />
				<p>Loading</p>
			</div>
		);
	if (!user) return <Navigate to="/" />;

	return children;
};

export default ProtectedRoute;
