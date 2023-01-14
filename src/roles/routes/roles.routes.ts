import { Role } from '@roles/entities/Role'
import { Router, Request, Response } from 'express'
const rolesRouter = Router()

const roles: Role[] = []

rolesRouter.post('/', (req: Request, res: Response) => {
  const { name } = req.body

  const role = new Role()
  Object.assign(role, {
    name,
    created_at: new Date(),
  })

  roles.push(role)

  return res.status(201).json({ role })
})

export { rolesRouter }
