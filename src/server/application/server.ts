import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as express from 'express'
import {NextFunction, Request, Response} from 'express'
import * as morgan from 'morgan'
import {apiRouter} from './api.router'

const app = express()

export function start(port: number): express.Application {
  configure()
  initRoutes()
  serveStaticFiles()
  handleErrors()
  app.set('port', port)
  return app
}

function configure() {
  app.use(morgan('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(cookieParser('AWESOME SECRET DEVELOPMENT SH1T'))
}

function initRoutes() {
  app.use('/api', apiRouter)
}

function serveStaticFiles() {
  // app.use(express.static(__dirname + '../../client'))
}

function handleErrors() {
  app.use((req: Request, res: Response) => {
    res.status(404)
  })
  //noinspection JSUnusedLocalSymbols
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err)
    res.status(500).send(err.message)
  })
}
