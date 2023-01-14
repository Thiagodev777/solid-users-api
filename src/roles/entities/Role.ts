import { v4 as uuidv4 } from 'uuid'

export class Role {
  private id?: string
  private name: string
  private created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
