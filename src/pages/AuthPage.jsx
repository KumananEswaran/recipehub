import { Button, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

const AuthPage = () => {
	return (
		<>
			<NavigationBar />

			<Container className="d-flex flex-wrap align-items-center justify-content-between mt-100">
				<div style={{ maxWidth: '500px' }}>
					<h1 className="fw-bold" style={{ fontSize: '46px' }}>
						Welcome to RecipeHub
					</h1>
					<p className="fst-italic" style={{ fontSize: '20px' }}>
						Find, save, and share your favorite recipes <br />— all in one
						place.
					</p>
					<Link to="/signup">
						<Button variant="outline-primary" style={{ marginTop: '40px' }}>
							Join Us Today
						</Button>
					</Link>
				</div>
				<div>
					<Image
						src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						fluid
						style={{ maxWidth: '550px', borderRadius: '12px' }}
					/>
				</div>
			</Container>
		</>
	);
};
export default AuthPage;
