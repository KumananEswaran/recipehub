import FullNavigationBar from '../components/FullNavigationBar';
import { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

	return (
		<>
			<FullNavigationBar />
			<Container>
				<Row>
					{recipes.map((recipe) => (
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
												<Button variant="outline-secondary" className="me-2">
													<i class="bi bi-pencil-square"></i>
												</Button>
												<Button variant="outline-danger">
													<i class="bi bi-trash"></i>
												</Button>
											</div>
										</div>
									</Card.Body>
								</Card>
							</div>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};
export default MyRecipe;
