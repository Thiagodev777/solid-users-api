import { DataSource } from 'typeorm'
import { CreateRolesTable1674165169568 } from './migrations/1674165169568-CreateRolesTable'

const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1674165169568],
})

export { dataSource }
