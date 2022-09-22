import express from 'express'
import { authorController } from '../controllers/index.js'

const router = express.Router()

/**
 * CREAR RUTAS DEL CRUD
 * GET /authors
 * POST /authors
 * PUT /authors/:id
 * GET /authors/:id
 * DELETE /authors/:id
 */

router.route('/authors').post(authorController.create).get(authorController.getAll)

router
  .route('/authors/:id')
  .put(authorController.updateById)
  .get(authorController.getById)
  .delete(authorController.deleteById)

export default router
