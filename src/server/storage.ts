import { KeyObject } from 'crypto';
import { SERVER_MIN_MOB_ID, SERVER_MIN_SERVICE_MOB_ID } from '@/constants';
import Entity from '@/server/entity';
import {
  BackupConnectionId,
  ConnectionId,
  HitboxCacheItem,
  IPv4,
  MainConnectionId,
  MobId,
  PlayerConnection,
  PlayerId,
  PlayerName,
  PlayerNameHistoryItem,
  PlayerRecoverItem,
  PowerupSpawnChunk,
  SpawnZones,
  TeamId,
  UnmuteTime,
  UserId,
  Viewports,
} from '@/types';

export class GameStorage {
  /**
   * Game entity.
   */
  public gameEntity: Entity;

  /**
   * Ship hitboxes cache.
   */
  public shipHitboxesCache: {
    [shipType: number]: {
      [rotation: string]: HitboxCacheItem;
    };
  } = {};

  /**
   * Projectile hitboxes cache.
   */
  public projectileHitboxesCache: {
    [projectileType: number]: {
      [rotation: string]: HitboxCacheItem;
    };
  } = {};

  /**
   * Powerup/upgrades hitboxes cache.
   */
  public powerupHitboxesCache: {
    [powerupType: number]: { width: number; height: number; x: number; y: number };
  } = {};

  /**
   * CTF flag hitboxes cache.
   */
  public flagHitboxesCache: {
    [flagType: number]: { width: number; height: number; x: number; y: number };
  } = {};

  /**
   * Used to generate mob identifiers.
   * Use `createMobId` helper to generate ID.
   */
  public nextMobId = SERVER_MIN_MOB_ID;

  /**
   * Service mobs: mountains, CTF flags, server bot, etc.
   * Use `createServiceMobId` helper to generate ID.
   */
  public nextServiceMobId = SERVER_MIN_SERVICE_MOB_ID;

  /**
   * Used to generate connection identifiers.
   */
  public nextConnectionId = 1;

  /**
   * All connections (main and backup).
   */
  public connectionList: Map<ConnectionId, PlayerConnection> = new Map();

  /**
   * All main connection ids map.
   */
  public playerMainConnectionList: Map<PlayerId, MainConnectionId> = new Map();

  /**
   * All backup connection ids map.
   */
  public playerBackupConnectionList: Map<PlayerId, BackupConnectionId> = new Map();

  /**
   * All main connection ids.
   */
  public mainConnectionIdList: Set<MainConnectionId> = new Set();

  /**
   * Human main connection ids.
   */
  public humanConnectionIdList: Set<MainConnectionId> = new Set();

  /**
   * Bot main connection ids.
   */
  public botConnectionIdList: Set<MainConnectionId> = new Set();

  /**
   * Connection ids lists grouped by team.
   */
  public connectionIdByTeam: Map<TeamId, Set<MainConnectionId>> = new Map();

  /**
   * Main connection ids accessible by username.
   */
  public connectionIdByNameList: {
    [playerName: string]: MainConnectionId;
  } = {};

  /**
   * All mobs ids (include players).
   */
  public mobIdList: Set<MobId> = new Set();

  /**
   * All bots ids.
   */
  public botIdList: Set<PlayerId> = new Set();

  /**
   * Currently used player names.
   */
  public playerNameList: Set<PlayerName> = new Set();

  /**
   * The player ID is reserved for reuse for a while.
   */
  public playerHistoryNameToIdList: Map<PlayerName, PlayerNameHistoryItem> = new Map();

  /**
   * Player entities.
   */
  public playerList: Map<PlayerId, Entity> = new Map();

  /**
   * Mob entities (not players and the mobs which have its own storage,
   * like repels and viewports).
   */
  public mobList: Map<MobId, Entity> = new Map();

  /**
   * User entities.
   */
  public userList: Map<UserId, Entity> = new Map();

  /**
   * Logged-in user ids.
   */
  public onlineUserIdList: Set<UserId> = new Set();

  /**
   * Repel is a mob with the same as its owner id.
   */
  public repelList: Map<PlayerId, Entity> = new Map();

  /**
   * Who currently sees the mob.
   * It can also be used to determine who is nearby.
   */
  public broadcast: Map<MobId, Set<MainConnectionId>> = new Map();

  /**
   * Players in spectator mode.
   */
  public playerInSpecModeList: Set<PlayerId> = new Set();

  /**
   * Player data to recover after disconnect.
   */
  public playerRecoverList: Map<PlayerId, PlayerRecoverItem> = new Map();

  public projectileIdList: Set<MobId> = new Set();

  public shieldIdList: Set<MobId> = new Set();

  public infernoIdList: Set<MobId> = new Set();

  public upgradeIdList: Set<MobId> = new Set();

  /**
   * Player viewport list.
   * Viewport with the same as its owner id.
   */
  public viewportList: Viewports = new Map();

  /**
   * Tokens to establish backup connections.
   */
  public backupTokenList: Map<string, PlayerId> = new Map();

  /**
   * Connections counter.
   */
  public connectionByIPCounter: Map<IPv4, number> = new Map();

  /**
   * List of main connections id by IP.
   */
  public connectionByIPList: Map<IPv4, Set<MainConnectionId>> = new Map();

  /**
   * Packet flooding attempts counter.
   */
  public packetFloodingList: Map<IPv4, number> = new Map();

  public ipMuteList: Map<IPv4, UnmuteTime> = new Map();

  public ipBanList: Map<
    IPv4,
    {
      reason: string;
      expire: number;
    }
  > = new Map();

  /**
   * Bots IPs.
   */
  public ipWhiteList: Set<IPv4> = new Set();

  /**
   * Pre-generated planes spawn-zones.
   * [x, y]
   */
  public predatorSpawnZones: SpawnZones = new Map();

  public goliathSpawnZones: SpawnZones = new Map();

  public copterSpawnZones: SpawnZones = new Map();

  public tornadoSpawnZones: SpawnZones = new Map();

  public prowlerSpawnZones: SpawnZones = new Map();

  /**
   * Pre-generated powerups spawn-zones.
   */
  public powerupSpawns: Map<number, PowerupSpawnChunk> = new Map();

  public serverPlayerId: number = null;

  public ctfFlagBlueId: number = null;

  public ctfFlagRedId: number = null;

  /**
   * Public key from login server
   */
  public loginPublicKey: KeyObject = null;
}
