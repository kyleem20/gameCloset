import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { gameNightService } from "./GameNightService"

class PlayersService {
  async attendGameNight(pin) {
    const res = await api.post(`api/players/${pin}`)
    // AppState.players = [...AppState.players, res.data]
    // AppState.activeGameNight = res.data
    // logger.log(AppState.players, AppState.activeGameNight)
  }
  async unattendGameNight(playerId) {
    let leaveGame = await api.delete(`api/players/${playerId}`)
    //  NOTE call the all my attendance function here
  }
  async editMyItems(player) {
    await api.put(`api/players/${player.id}`, player)
    // const newPlayer = res.data
    // AppState.players = newPlayer
    // const index = AppState.players.findIndex(p => p.id === player.id)
    // if (index === -1) {
    //   AppState.players.push(newPlayer)
    //   return
    // }
    // logger.log("[SPLICE IT]:", index, AppState.players.length)
    // AppState.players.splice(index, 1, newPlayer)
    // logger.log("[SPLICE IT POST]:", index, AppState.players.length)
  }
  async getGameNightsImAttending() {
    const res = await api.get('account/players')
    AppState.myAttending = res.data
  }

}

export const playersService = new PlayersService()