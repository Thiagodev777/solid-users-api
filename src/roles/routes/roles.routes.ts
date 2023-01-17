import { createRolesController } from '@roles/useCases/createRole'
import { listRolesController } from '@roles/useCases/listRoles'
import { Router, Request, Response } from 'express'

const rolesRouter = Router()

rolesRouter.get('/', (req: Request, res: Response) => {
  return listRolesController.handle(req, res)
})

rolesRouter.post('/', (req: Request, res: Response) => {
  return createRolesController.handle(req, res)
})

export { rolesRouter }
