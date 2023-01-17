import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import { routes } from './routes/routes'
import { AppError } from './errors/AppError'
import swaggerFile from './swagger.json'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    })
  }
  console.log(error)
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
})

app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}!`),
)
