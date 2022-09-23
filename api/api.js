import express from 'express'
import { authValidator } from './middlewares/index.js'
import { authorRoutes, authRoutes, bookRoutes } from './routes/index.js'

const api = express()

// TODO: condigurar express para que acepte json
api.use(express.json())

api.use(authRoutes)
api.use(authValidator)
api.get('/status', (_, res) => {
  res.json({
    msg: 'API en linea y funcionando'
  })
})

// TODO: Registrar todas las rutas acá
api.use(bookRoutes)
api.use(authorRoutes)

export default api
