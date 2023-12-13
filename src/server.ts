import cors from 'cors'
import express, { type NextFunction, type Request, type Response } from 'express'
import 'express-async-errors'
import router from './routes'

const port = 3333

const app = express()

app.use(express.json())
app.use(cors())

app.use(router)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return res.status(400).json({
      error: error.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })
})

app.listen(port, () => { console.log(`Server is running on port ${port}`) })
