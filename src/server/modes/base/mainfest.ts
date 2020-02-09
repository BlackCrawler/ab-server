import Times from '@/server/components/game/times';
import Connections from '@/server/connections';
import Entity from '@/server/entity';
import { GameManifest } from '@/server/manifest';
import FlagCommandHandler from '@/server/modes/base/commands/flag';
import HorizonCommandHandler from '@/server/modes/base/commands/horizon';
import ProfileCommandHandler from '@/server/modes/base/commands/profile';
import RespawnCommandHandler from '@/server/modes/base/commands/respawn';
import ServerCommandHandler from '@/server/modes/base/commands/server';
import SpectateCommandHandler from '@/server/modes/base/commands/spectate';
import SpectatorsCommandHandler from '@/server/modes/base/commands/spectators';
import SuperuserCommandHandler from '@/server/modes/base/commands/su';
import UpgradeCommandHandler from '@/server/modes/base/commands/upgrade';
import UpgradesCommandHandler from '@/server/modes/base/commands/upgrades';
import AbilitiesCommandHandler from '@/server/modes/base/commands/abilities';
import AckMessageHandler from '@/server/modes/base/controllers/ack';
import BackupMessageHandler from '@/server/modes/base/controllers/backup';
import ChatMessageHandler from '@/server/modes/base/controllers/chat';
import CommandMessageHandler from '@/server/modes/base/controllers/command';
import HorizonMessageHandler from '@/server/modes/base/controllers/horizon';
import KeyMessageHandler from '@/server/modes/base/controllers/key';
import LocalpingMessageHandler from '@/server/modes/base/controllers/localping';
import LoginMessageHandler from '@/server/modes/base/controllers/login';
import PongMessageHandler from '@/server/modes/base/controllers/pong';
import SayMessageHandler from '@/server/modes/base/controllers/say';
import ScoredetailedMessageHandler from '@/server/modes/base/controllers/scoredetailed';
import TeamchatMessageHandler from '@/server/modes/base/controllers/teamchat';
import VotemuteMessageHandler from '@/server/modes/base/controllers/votemute';
import WhisperMessageHandler from '@/server/modes/base/controllers/whisper';
import BansGuard from '@/server/modes/base/guards/bans';
import ChatGuard from '@/server/modes/base/guards/chat';
import PacketsGuard from '@/server/modes/base/guards/packets';
import GameChat from '@/server/modes/base/maintenance/chat';
import GameClock from '@/server/modes/base/maintenance/clock';
import GameCollisions from '@/server/modes/base/maintenance/collisions';
import GameMetrics from '@/server/modes/base/maintenance/metrics';
import GameMountains from '@/server/modes/base/maintenance/mountains';
import GameMute from '@/server/modes/base/maintenance/mute';
import GamePlayersBounce from '@/server/modes/base/maintenance/players/bounce';
import GamePlayersConnect from '@/server/modes/base/maintenance/players/connect';
import GamePlayersDisconnect from '@/server/modes/base/maintenance/players/disconnect';
import GamePlayersHit from '@/server/modes/base/maintenance/players/hit';
import GamePlayersKill from '@/server/modes/base/maintenance/players/kill';
import GamePlayersPowerup from '@/server/modes/base/maintenance/players/powerup';
import GamePlayersRepel from '@/server/modes/base/maintenance/players/repel';
import GamePlayersRespawn from '@/server/modes/base/maintenance/players/respawn';
import GamePlayersShipType from '@/server/modes/base/maintenance/players/ship-type';
import GamePlayersUpdate from '@/server/modes/base/maintenance/players/update';
import GameUpgrades from '@/server/modes/base/maintenance/players/upgrades';
import GamePowerups from '@/server/modes/base/maintenance/powerups';
import GameProjectiles from '@/server/modes/base/maintenance/projectiles';
import GameRankings from '@/server/modes/base/maintenance/rankings';
import GameSpectating from '@/server/modes/base/maintenance/spectating';
import GameViewports from '@/server/modes/base/maintenance/viewports';
import GameWarming from '@/server/modes/base/maintenance/warming';
import PingPeriodic from '@/server/modes/base/periodic/ping';
import PowerupsPeriodic from '@/server/modes/base/periodic/powerups';
import ScoreBoardPeriodic from '@/server/modes/base/periodic/score-board';
import UserStatsPeriodic from '@/server/modes/base/periodic/user-stats';
import AlreadyLoggedInResponse from '@/server/modes/base/responses/already-logged-in';
import BackupResponse from '@/server/modes/base/responses/backup';
import PlayerBanResponse from '@/server/modes/base/responses/ban';
import ChatPublicBroadcast from '@/server/modes/base/responses/broadcast/chat-public';
import ChatSayBroadcast from '@/server/modes/base/responses/broadcast/chat-say';
import ChatServerPublicBroadcast from '@/server/modes/base/responses/broadcast/chat-server-public';
import ChatServerTeamBroadcast from '@/server/modes/base/responses/broadcast/chat-server-team';
import ChatServerWhisperBroadcast from '@/server/modes/base/responses/broadcast/chat-server-whisper';
import ChatTeamBroadcast from '@/server/modes/base/responses/broadcast/chat-team';
import ChatWhisperBroadcast from '@/server/modes/base/responses/broadcast/chat-whisper';
import EventBoostBroadcast from '@/server/modes/base/responses/broadcast/event-boost';
import EventBounceBroadcast from '@/server/modes/base/responses/broadcast/event-bounce';
import EventRepelBroadcast from '@/server/modes/base/responses/broadcast/event-repel';
import EventStealthBroadcast from '@/server/modes/base/responses/broadcast/event-stealth';
import MobDespawnBroadcast from '@/server/modes/base/responses/broadcast/mob-despawn';
import MobDespawnCoordsBroadcast from '@/server/modes/base/responses/broadcast/mob-despawn-coords';
import MobUpdateBroadcast from '@/server/modes/base/responses/broadcast/mob-update';
import MobUpdateStationaryBroadcast from '@/server/modes/base/responses/broadcast/mob-update-stationary';
import PlayerFireBroadcast from '@/server/modes/base/responses/broadcast/player-fire';
import PlayerFlagBroadcast from '@/server/modes/base/responses/broadcast/player-flag';
import PlayerHitBroadcast from '@/server/modes/base/responses/broadcast/player-hit';
import PlayerKillBroadcast from '@/server/modes/base/responses/broadcast/player-kill';
import PlayerLeaveBroadcast from '@/server/modes/base/responses/broadcast/player-leave';
import PlayerLevelBroadcast from '@/server/modes/base/responses/broadcast/player-level';
import PlayerNewBroadcast from '@/server/modes/base/responses/broadcast/player-new';
import PlayerRespawnBroadcast from '@/server/modes/base/responses/broadcast/player-respawn';
import PlayerReteamBroadcast from '@/server/modes/base/responses/broadcast/player-reteam';
import PlayerTypeBroadcast from '@/server/modes/base/responses/broadcast/player-type';
import PlayerUpdateBroadcast from '@/server/modes/base/responses/broadcast/player-update';
import ScoreBoardBroadcast from '@/server/modes/base/responses/broadcast/score-board';
import ServerMessageBroadcast from '@/server/modes/base/responses/broadcast/server-message';
import VotemutedResponse from '@/server/modes/base/responses/chat-votemuted';
import VotemutePassedResponse from '@/server/modes/base/responses/chat-votemutepassed';
import CommandReply from '@/server/modes/base/responses/command-reply';
import EventLeaveHorizon from '@/server/modes/base/responses/event-leavehorizon';
import GameSpectate from '@/server/modes/base/responses/game-spectate';
import IncorrectProtocol from '@/server/modes/base/responses/incorrect-protocol';
import InvalidLogin from '@/server/modes/base/responses/invalid-login';
import KickPlayer from '@/server/modes/base/responses/kick';
import LoginResponse from '@/server/modes/base/responses/login';
import NotEnoughUpgrades from '@/server/modes/base/responses/not-enough-upgrades';
import PingResult from '@/server/modes/base/responses/ping-result';
import PlayerPowerup from '@/server/modes/base/responses/player-powerup';
import PlayerUpgrade from '@/server/modes/base/responses/player-upgrade';
import PlayersLimit from '@/server/modes/base/responses/players-limit';
import RespawnInactivityRequired from '@/server/modes/base/responses/respawn-inactivity-required';
import ScoreUpdate from '@/server/modes/base/responses/score-update';
import ServerMessage from '@/server/modes/base/responses/server-message';
import ServerPlayerConnectResponse from '@/server/modes/base/responses/server-player-connect';
import SpectateInactivityRequired from '@/server/modes/base/responses/spectate-inactivity-required';
import SpectateKillResponse from '@/server/modes/base/responses/spectate-kill';
import LoginPublicKeyDownloader from '@/server/modes/base/support/auth';
import MobIdStorageOptimizer from '@/server/modes/base/support/mob-id-storage';
import Recovering from '@/server/modes/base/support/recovering';
import AckTimeoutHandler from '@/server/modes/base/timeouts/ack';
import BackupTimeoutHandler from '@/server/modes/base/timeouts/backup';
import LoginTimeoutHandler from '@/server/modes/base/timeouts/login';
import PongTimeoutHandler from '@/server/modes/base/timeouts/pong';
import PacketRouter from '@/server/router';

export default abstract class BaseGameManifest extends GameManifest {
  constructor({ app }) {
    super({ app });

    this.systems = [
      // Encoding and decoding ws packets, routing messages.
      Connections,
      PacketRouter,

      // Guards.
      PacketsGuard,
      ChatGuard,

      // Message Controllers.
      AckMessageHandler,
      BackupMessageHandler,
      ChatMessageHandler,
      CommandMessageHandler,
      HorizonMessageHandler,
      KeyMessageHandler,
      LocalpingMessageHandler,
      LoginMessageHandler,
      PongMessageHandler,
      SayMessageHandler,
      TeamchatMessageHandler,
      VotemuteMessageHandler,
      WhisperMessageHandler,
      ScoredetailedMessageHandler,

      // Commands.
      FlagCommandHandler,
      HorizonCommandHandler,
      ProfileCommandHandler,
      RespawnCommandHandler,
      ServerCommandHandler,
      SpectateCommandHandler,
      SpectatorsCommandHandler,
      SuperuserCommandHandler,
      UpgradeCommandHandler,
      UpgradesCommandHandler,
      AbilitiesCommandHandler,

      // Responses.
      ServerMessage,
      BackupResponse,
      IncorrectProtocol,
      InvalidLogin,
      KickPlayer,
      LoginResponse,
      ScoreUpdate,
      PlayersLimit,
      PingResult,
      PlayerUpgrade,
      NotEnoughUpgrades,
      RespawnInactivityRequired,
      SpectateInactivityRequired,
      EventLeaveHorizon,
      CommandReply,
      GameSpectate,
      PlayerPowerup,
      ServerPlayerConnectResponse,
      VotemutedResponse,
      VotemutePassedResponse,
      SpectateKillResponse,
      PlayerBanResponse,
      AlreadyLoggedInResponse,

      // Broadcast.
      ChatPublicBroadcast,
      ChatSayBroadcast,
      ChatServerPublicBroadcast,
      ChatServerTeamBroadcast,
      ChatServerWhisperBroadcast,
      ChatTeamBroadcast,
      ChatWhisperBroadcast,
      EventBoostBroadcast,
      EventBounceBroadcast,
      EventRepelBroadcast,
      EventStealthBroadcast,
      MobDespawnBroadcast,
      MobDespawnCoordsBroadcast,
      MobUpdateBroadcast,
      MobUpdateStationaryBroadcast,
      PlayerFireBroadcast,
      PlayerFlagBroadcast,
      PlayerHitBroadcast,
      PlayerKillBroadcast,
      PlayerLeaveBroadcast,
      PlayerLevelBroadcast,
      PlayerNewBroadcast,
      PlayerRespawnBroadcast,
      PlayerReteamBroadcast,
      PlayerTypeBroadcast,
      PlayerUpdateBroadcast,
      ScoreBoardBroadcast,
      ServerMessageBroadcast,

      // Timeouts.
      AckTimeoutHandler,
      BackupTimeoutHandler,
      LoginTimeoutHandler,
      PongTimeoutHandler,

      // Periodic.
      PingPeriodic,
      ScoreBoardPeriodic,
      PowerupsPeriodic,
      UserStatsPeriodic,

      // Support.
      MobIdStorageOptimizer,
      BansGuard,
      Recovering,
      LoginPublicKeyDownloader,

      // Game Maintenance.
      GameClock,
      GameMetrics,
      GameWarming,
      GamePlayersUpdate,
      GamePlayersConnect,
      GamePlayersRespawn,
      GamePlayersDisconnect,
      GamePlayersHit,
      GamePlayersKill,
      GamePlayersPowerup,
      GamePlayersBounce,
      GamePlayersShipType,
      GameCollisions,
      GameProjectiles,
      GamePlayersRepel,
      GameMountains,
      GamePowerups,
      GameUpgrades,
      GameViewports,
      GameChat,
      GameMute,
      GameSpectating,
      GameRankings,
    ];

    this.startSystems();

    this.app.storage.gameEntity = new Entity().attach(new Times());
  }
}
