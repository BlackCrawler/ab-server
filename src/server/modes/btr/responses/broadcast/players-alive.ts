import { ServerPackets, SERVER_PACKETS } from '@airbattle/protocol';
import { CONNECTIONS_SEND_PACKET } from '@/events';
import { System } from '@/server/system';
import { PlayerId } from '@/types';

export default class PlayersAliveBroadcast extends System {
  constructor({ app }) {
    super({ app });

    this.listeners = {};
  }

  /**
   * Broadcast on:
   * 1. Player death.
   * 2. Player login.
   * ? game start, game end
   *
   * Broadcast to all players or personally to the player after login.
   */
  onServerCustom(playerId: PlayerId = null): void {
    this.emit(
      CONNECTIONS_SEND_PACKET,
      {
        c: SERVER_PACKETS.GAME_PLAYERSALIVE,
        players: 0,
      } as ServerPackets.GamePlayersalive,
      playerId === null
        ? [...this.storage.mainConnectionIdList]
        : this.storage.playerMainConnectionList.get(playerId)
    );
  }
}
