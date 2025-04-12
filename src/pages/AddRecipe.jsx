import { Container, Form, Button } from 'react-bootstrap';
import FullNavigationBar from '../components/FullNavigationBar';

const AddRecipe = () => {
	return (
		<>
			<FullNavigationBar />

			<Container className="py-5">
				<h2 className="mb-4 text-center fw-bold">Add a Recipe</h2>
				<Form className="mx-auto" style={{ maxWidth: '600px' }}>
					<Form.Group className="mb-3" controlId="title">
						<Form.Label className="fw-semibold">Recipe Title</Form.Label>
						<Form.Control type="text" placeholder="Enter the recipe title" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="decription">
						<Form.Label className="fw-semibold">Description</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							placeholder="Write a short description..."
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="ingredients">
						<Form.Label className="fw-semibold">Ingredients</Form.Label>
						<Form.Control
							as="textarea"
							rows={6}
							placeholder="Put each ingredient on its own line"
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="directions">
						<Form.Label className="fw-semibold">Directions</Form.Label>
						<Form.Control
							as="textarea"
							rows={6}
							placeholder="Put each step on its own line"
						/>
					</Form.Group>
					<Form.Group controlId="formFile" className="mb-4">
						<Form.Label className="fw-semibold">Image</Form.Label>
						<Form.Control type="file" />
					</Form.Group>

					<div className="d-grid">
						<Button variant="primary" size="lg">
							Submit Recipe
						</Button>
					</div>
				</Form>
			</Container>
		</>
	);
};
export default AddRecipe;
