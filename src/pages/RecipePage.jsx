import FullNavigationBar from '../components/FullNavigationBar';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

const RecipePage = () => {
	const { id } = useParams();
	const [recipe, setRecipe] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchRecipe = async () => {
			try {
				const res = await axios.get(`http://localhost:5000/recipes/${id}`);
				setRecipe(res.data);
			} catch (error) {
				console.error('Error fetching recipe:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchRecipe();
	}, [id]);

	if (loading) {
		return (
			<>
				<FullNavigationBar />
				<Container className="py-5 text-center">
					<Spinner animation="border" role="status" />
					<p>Loading...</p>
				</Container>
			</>
		);
	}

	return (
		<>
			<FullNavigationBar />
			<Container className="py-5">
				{/* Put button on top in mobile version */}
				<Row className="mb-4">
					<Col xs={12} className="mb-3 d-md-none">
						<Link to="/home">
							<Button variant="outline-primary">
								<i className="bi bi-arrow-left"></i> Back
							</Button>
						</Link>
					</Col>
					<Col xs={12} md={8}>
						<h2 className="mb-2">
							<strong>{recipe.title}</strong>
						</h2>
						<p className="mb-2">{recipe.description}</p>
					</Col>
					<Col xs={12} md={4} className="text-md-end d-none d-md-block">
						<Link to="/home">
							<Button variant="outline-primary">
								<i className="bi bi-arrow-left"></i> Back
							</Button>
						</Link>
					</Col>
				</Row>
				<Row>
					<Col>
						<Image
							className="mb-4 shadow-sm rounded-4"
							src={recipe.image_url}
							alt={recipe.title}
							fluid
							style={{
								maxHeight: '400px',
								objectFit: 'cover',
								width: '100%',
								border: '1px solid #dee2e6',
							}}
						/>
						<div className="d-flex justify-content-between align-items-center">
							<h3 className="fs-2">
								<strong>Recipe</strong>
							</h3>
							<i className="bi bi-bookmark fs-3"></i>
						</div>
						<h4>
							<strong>Ingredients</strong>
						</h4>
						<hr />
						<ul className="list-unstyled">
							{recipe.ingredients.split('\n').map((ingredient, index) => (
								<li key={index}>{ingredient}</li>
							))}
						</ul>
						<h4>
							<strong>Directions</strong>
						</h4>
						<hr />
						<ol>
							{recipe.directions.split('\n').map((step, index) => (
								<li key={index}>{step}</li>
							))}
						</ol>
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default RecipePage;
