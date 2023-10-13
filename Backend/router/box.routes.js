import { Router } from 'express';
import { createProduct } from '../Controller/product.controller.js'; 
// import { authRequired } from '../Middlewares/validateToken.middleware.js';

const router = Router();

// Create a product
router.post('/createProduct', /*authRequired,*/ createProduct);

// // Get products
// router.get('/getProducts', authRequired, getProducts);

// // Get a product
// router.get('/getProduct/:id', authRequired, getProduct);

// // Delete a product
// router.delete('/deleteProduct/:id', authRequired, deleteProduct);

// // Update a product
// router.put('/updateProduct/:id', authRequired, updateProduct);

// Export the router
export default router;