import { RolesRepository } from '@roles/repositories/RoleRepository'
import { Request, Response } from 'express'
import { AppError } from 'src/errors/AppError'
import { CreateRoleUseCase } from './CreateRoleUseCase'

export class CreateRoleController {
  constructor(private createRoleUseCase: CreateRoleUseCase) {}
  handle(req: Request, res: Response): Response {
    const { name } = req.body
    const role = this.createRoleUseCase.execute({ name })
    return res.status(201).json({ role })
  }
}
