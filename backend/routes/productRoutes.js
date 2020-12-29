import express from 'express';
import asyncHandler from 'express-async-handler';

const router = express.Router();
import Product from '../models/productModel.js';

// @desc      Fetch all products
// @route     GET /api/products
// @access    Public
router.get(
  '/',
  asyncHandler(async (request, response) => {
    const products = await Product.find({});
    response.json(products);
  })
);

// @desc      Fetch single product
// @route     GET /api/product/:id
// @access    Public
router.get(
  '/:id',
  asyncHandler(async (request, response) => {
    // const product = products.find((p) => p._id === request.params.id);
    const product = await Product.findById(request.params.id);

    if (product) {
      response.json(product);
    } else {
      // response.status(404).json({ message: 'Product not found' });
      response.status(404);
      throw new Error('Product not found');
    }
  })
);

export default router;
