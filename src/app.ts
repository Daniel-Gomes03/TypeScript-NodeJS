import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.database()
    this.middleware()
    this.routes()
  }

  private middleware (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  // Quando a função não tem return nós indicamos que esse retorno é void

  private database (): void {
    mongoose.connect('mongodb://localhost:27017/tsnode', {
      useNewUrlParser: true
    })
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
