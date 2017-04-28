import {Request, Response, Router, NextFunction} from 'express'
import {gameService} from '../model/game.service'

export const router = Router()

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  req.session.regenerate((err) => {
    if (err) {
      next(err)
    } else {
      const username = req.body.username
      req.session.username = username
      gameService.addPlayer(username)
      res.sendStatus(204)
    }
  })
})

router.get('/game', (req: Request, res: Response) => {
  res.send(gameService.game.json)
})

router.get('/player', (req: Request, res: Response) => {
  if (req.session.username) {
    res.send(gameService.getPlayer(req.session.username))
  } else {
    res.sendStatus(204)
  }
})
