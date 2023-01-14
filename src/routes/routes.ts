import { Router } from 'express'
import { rolesRouter } from '@roles/routes/roles.routes'

const routes = Router()

routes.get('/', (req, res) => {
  res.send('ok')
})

routes.use('/roles', rolesRouter)

export { routes }
