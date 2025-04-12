import FullNavigationBar from '../components/FullNavigationBar';
import { Link, useParams } from 'react-router-dom';
import recipeData from '../recipedata';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const RecipePage = () => {
	const { id } = useParams();
	const recipe = recipeData.find((data) => data.id === Number(id)); // import recipe base on the id

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
							src={recipe.image}
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
							{recipe.ingredients.map((ingredient, idx) => (
								<li key={idx}>{ingredient}</li>
							))}
						</ul>
						<h4>
							<strong>Directions</strong>
						</h4>
						<hr />
						<ol>
							{recipe.direction.map((step, idx) => (
								<li key={idx}>{step}</li>
							))}
						</ol>
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default RecipePage;
