import NavigationBar from '../components/NavigationBar';
import { Container, Form, Button, Card } from 'react-bootstrap';

const LoginPage = () => {
	return (
		<>
			<NavigationBar />
			<Container className="d-flex justify-content-center mt-100">
				<Form className="w-100 max-w">
					<h2 className="mb-4 text-center">Login</h2>

					<Form.Group controlId="formEmail" className="mb-3">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group controlId="formPassword" className="mb-4">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>

					<Button variant="primary" type="submit" className="w-100">
						Log In
					</Button>
				</Form>
			</Container>
		</>
	);
};
export default LoginPage;
