import express from 'express'
import 'express-async-errors'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  return res.json({ message: 'ok' })
})

app.listen(3333, () => console.log('Server started on port 3333!'))
