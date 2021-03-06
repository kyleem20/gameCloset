import { Auth0Provider } from '@bcwdev/auth0provider'
import { gamesQueueService } from '../services/GamesQueueService'
import { socketProvider } from '../SocketProvider'
import BaseController from '../utils/BaseController'

export class GamesQueueController extends BaseController {
  constructor() {
    super('/api/gamequeue')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      // NOTE this id is the specific gamequeue id
      .get('/:id', this.getById)

      // NOTE this id is the gamequeue id
      .put('/:id/votes', this.edit)
      // NOTE this id is the gamequeue id
      .delete('/:id', this.remove)
  }

  async create(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const gameq = await gamesQueueService.create(req.body)
      res.send(gameq)
      socketProvider.messageRoom(`Game${gameq.gameNightId}Night`, 'New Game Que', gameq)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const gameq = await gamesQueueService.getById(req.params.id)
      return res.send(gameq)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      req.body.id = req.params.id
      const vote = await gamesQueueService.edit(req.body)
      res.send(vote)
      socketProvider.messageRoom(`Game${vote.gameNightId}Night`, 'Votes on Game Que', vote)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const userId = req.userInfo.id
      const gameqId = req.params.id
      const removeGQ = await gamesQueueService.remove(gameqId, userId)
      res.send('no more gq games')
      socketProvider.messageRoom(`Game${removeGQ.gameNightId}Night`, 'Removed Game Que', removeGQ.id)
    } catch (error) {
      next(error)
    }
  }
}
