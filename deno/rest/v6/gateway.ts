import type { APIGatewayBotInfo, APIGatewayInfo } from '../../payloads/v6/mod.ts';

/**
 * https://discord.com/developers/docs/topics/gateway#get-gateway
 *
 * @deprecated API v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type RESTGetAPIGatewayResult = APIGatewayInfo;

/**
 * https://discord.com/developers/docs/topics/gateway#get-gateway-bot
 *
 * @deprecated API v6 is deprecated and the types will not receive further updates, please update to v8.
 */
export type RESTGetAPIGatewayBotResult = APIGatewayBotInfo;
