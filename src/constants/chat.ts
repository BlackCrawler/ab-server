import { MS_PER_SEC, SECONDS_PER_MINUTE } from '@/constants/units';

/**
 * Only one message (all types, inc. whisper) will be handled per these ticks.
 */
export const CHAT_MESSAGE_PER_TICKS_LIMIT = 12;

export const CHAT_MUTE_TIME_MS = 10 * SECONDS_PER_MINUTE * MS_PER_SEC;

export const CHAT_SUPERUSER_MUTE_TIME_MS = 60 * SECONDS_PER_MINUTE * MS_PER_SEC;

/**
 * To use /votemute player must play (not spectate, not stay) at least this time duration.
 */
export const CHAT_MIN_PLAYER_PLAYTIME_TO_VOTEMUTE_MS = 60 * MS_PER_SEC;

export const CHAT_FIRST_MESSAGE_SAFE_DELAY_MS = 2000;

export const CHAT_USERNAME_PLACEHOLDER = '%username%';
