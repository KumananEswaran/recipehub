import FullNavigationBar from '../components/FullNavigationBar';
import { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditModal from '../components/EditModal';

const MyRecipe = () => {
	const [recipes, setRecipes] = useState([]);
	const user = JSON.parse(localStorage.getItem('user'));
	const userUid = user?.uid;

	useEffect(() => {
		const fetchRecipes = async () => {
			try {
				const res = await axios.get('http://localhost:5000/recipes');
				const userRecipes = res.data.filter(
					(recipe) => recipe.user_uid === userUid
				);

				setRecipes(userRecipes);
			} catch (error) {
				console.error('Error fetching recipes:', error);
			}
		};

		fetchRecipes();
	}, [userUid]);

	const [show, setShow] = useState(false);
	const [selectedRecipe, setSelectedRecipe] = useState(null);

	const handleShow = (recipe) => {
		setSelectedRecipe(recipe);
		setShow(true);
	};
	const handleClose = () => setShow(false);

	const refreshRecipes = async () => {
		try {
			const res = await axios.get('http://localhost:5000/recipes');
			const userRecipes = res.data.filter((r) => r.user_uid === userUid);
			setRecipes(userRecipes);
		} catch (error) {
			console.error('Error refreshing recipes:', error);
		}
	};

	return (
		<>
			<FullNavigationBar />
			<Container className="py-4">
				<Row>
					{recipes.length === 0 ? (
						<div className="text-center my-5">
							<h4>Your recipe book is empty! 🥘</h4>
							<p className="text-muted">
								Start sharing your delicious creations with the world.
							</p>
							<Link to={'/add-recipe'}>
								<Button variant="outline-primary">Add Your First Recipe</Button>
							</Link>
						</div>
					) : (
						recipes.map((recipe) => (
							<Col md={6} lg={4} key={recipe.id} className="g-4">
								<div>
									<Card>
										<Card.Img
											variant="top"
											src={recipe.image_url}
											style={{ height: '300px', objectFit: 'cover' }}
										/>
										<Card.Body>
											<Card.Title>
												<strong>{recipe.title}</strong>
											</Card.Title>
											<p>By {recipe.user_name}</p>
											<Card.Text>{recipe.description}</Card.Text>
											<div className="d-flex justify-content-between align-items-center">
												<Link to={`/recipe/${recipe.id}`}>
													<Button variant="outline-primary">View Recipe</Button>
												</Link>
												<div>
													<Button
														variant="outline-secondary"
														className="me-2"
														onClick={() => handleShow(recipe)}>
														<i className="bi bi-pencil-square"></i>
													</Button>
													<Button variant="outline-danger">
														<i className="bi bi-trash"></i>
													</Button>
												</div>
											</div>
										</Card.Body>
									</Card>
								</div>
							</Col>
						))
					)}
				</Row>
			</Container>
			<EditModal
				show={show}
				handleClose={() => setShow(false)}
				recipe={selectedRecipe}
				refreshRecipes={refreshRecipes}
			/>
		</>
	);
};
export default MyRecipe;
