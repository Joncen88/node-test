import http from 'http'
const server = http.createServer(async (req, res) => {})
server.listen(4000, () => {
  console.log('READY!')
})

import express from 'express'
const app = express()

// Import the users router module
import usersRouter from './routes/users'

// Tell the app to use the user router
app.use(usersRouter)

app.listen(4000, () => console.log(`Server running on port 4000`))

// Import the users router module
import productsRouter from './routes/products'

// Tell the app to use the user router
app.use(productsRouter)

app.listen(4000, () => console.log(`Server running on port 4000`))
