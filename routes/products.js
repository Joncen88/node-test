import express from 'express'
import router from express.Router()

// Define a GET route for fetching the list of users
router.get('/products', (req, res) => {
  res.send('List of products')
})

// Define a GET route for fetching a single user
router.get('/products/1', (req, res) => {
  res.send('Product number 1')
})

// Export the router
export default router