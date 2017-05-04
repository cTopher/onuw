import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as express from 'express'
import * as session from 'express-session'
import * as path from 'path'
import {NextFunction, Request, Response} from 'express'
import * as morgan from 'morgan'
import {router} from './api.router'

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
  app.use(session({
    secret: 'uw mama is een secret',
    resave: false,
    saveUninitialized: true,
    cookie: {}
  }))
}

function initRoutes() {
  app.use('/api', router)
}

function serveStaticFiles() {
  app.use(express.static(path.join(__dirname, '../../resources')))
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
