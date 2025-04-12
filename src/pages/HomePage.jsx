import FullNavigationBar from '../components/FullNavigationBar';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import recipeData from '../recipedata';

const HomePage = () => {
	return (
		<>
			<FullNavigationBar />
			<section className="py-4">
				<Container>
					<Row>
						{recipeData.map((recipe) => (
							<Col md={6} lg={4} key={recipe.id} className="g-4">
								<div>
									<Card>
										<Card.Img
											variant="top"
											src={recipe.image}
											style={{ height: '300px' }}
										/>
										<Card.Body>
											<Card.Title>
												<strong>{recipe.title}</strong>
											</Card.Title>
											<p>By {recipe.userName}</p>
											<Card.Text>{recipe.description}</Card.Text>
											<div className="d-flex justify-content-between align-items-center">
												<Link to={`/recipe/${recipe.id}`}>
													<Button variant="outline-primary">View Recipe</Button>
												</Link>
												<i className="bi bi-heart fs-4"></i>
											</div>
										</Card.Body>
									</Card>
								</div>
							</Col>
						))}
					</Row>
				</Container>
			</section>
		</>
	);
};
export default HomePage;
