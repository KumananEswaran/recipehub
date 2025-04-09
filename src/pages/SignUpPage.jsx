import NavigationBar from '../components/NavigationBar';
import { Container, Form, Button } from 'react-bootstrap';

const SignUpPage = () => {
	return (
		<>
			<NavigationBar />
			<Container className="d-flex justify-content-center mt-100">
				<Form className="w-100 max-w">
					<h2 className="mb-4 text-center">Sign Up</h2>

					<Form.Group controlId="formName" className="mb-3">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Enter your name" />
					</Form.Group>

					<Form.Group controlId="formEmail" className="mb-3">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group controlId="formPassword" className="mb-4">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Create a password" />
					</Form.Group>

					<Button variant="primary" type="submit" className="w-100">
						Create Account
					</Button>
				</Form>
			</Container>
		</>
	);
};
export default SignUpPage;
