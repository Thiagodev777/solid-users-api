import { Router } from 'express'
import { AppError } from 'src/errors/AppError'

const routes = Router()

routes.get('/', (req, res) => {
  res.send('ok')
})

export { routes }
