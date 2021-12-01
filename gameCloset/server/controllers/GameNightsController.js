import { Auth0Provider } from '@bcwdev/auth0provider'
import { gameNightsService } from '../services/GameNightsService'
import BaseController from '../utils/BaseController'

export class GameNightsController extends BaseController {
  constructor() {
    super('/api/gamenight')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .get('', this.getAll)
      .get('/:pin', this.getByPin)
      .delete('/:id', this.remove)
      .put('/:id', this.edit)
  }

  async create(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const gamenight = await gameNightsService.create(req.body)
      return res.send(gamenight)
    } catch (error) {
      next(error)
    }
  }

  async getByPin(req, res, next) {
    try {
      const gamenight = await gameNightsService.getByPin(req.params.pin)
      return res.send(gamenight)
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      const query = req.query
      const gamenight = await gameNightsService.getAll(query)
      return res.send(gamenight)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      req.body.id = req.params.id
      const night = await gameNightsService.edit(req.body)
      return res.send(night)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const userId = req.userInfo.id
      const gamenightId = req.params.id
      await gameNightsService.remove(gamenightId, userId)
      res.send('Sad day, you cancelled on me')
    } catch (error) {
      next(error)
    }
  }
}
