import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import Logo from './Logo';
import { Link, NavLink } from 'react-router-dom';

const FullNavigationBar = () => {
	return (
		<>
			<Navbar bg="primary" expand="lg" variant="dark" className="sticky-top">
				<Container>
					<Link to="/" className="navbar-brand">
						<Logo />
					</Link>
					<Navbar.Toggle aria-controls="navbarColor01" />
					<Navbar.Collapse id="navbarColor01">
						<Nav className="me-auto">
							<Nav.Link as={NavLink} to="/home">
								Home
							</Nav.Link>
							<Nav.Link as={NavLink} to="/my-recipe">
								My Recipes
							</Nav.Link>
							<Nav.Link href="#">Favorite Recipes</Nav.Link>
							<Nav.Link href="#">Add Recipe</Nav.Link>
							<Nav.Link href="#">Claude Recipe</Nav.Link>
						</Nav>
						<div className="d-flex">
							<Link to="/signup">
								<Button variant="danger" type="submit">
									Logout
								</Button>
							</Link>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};
export default FullNavigationBar;
