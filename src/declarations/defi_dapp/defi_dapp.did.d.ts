import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Balance {
  'token' : Token,
  'owner' : Principal,
  'amount' : bigint,
}
export type CancelOrderErr = { 'NotAllowed' : null } |
  { 'NotExistingOrder' : null };
export type CancelOrderReceipt = { 'Ok' : OrderId } |
  { 'Err' : CancelOrderErr };
export type DepositErr = { 'TransferFailure' : null } |
  { 'BalanceLow' : null };
export type DepositReceipt = { 'Ok' : bigint } |
  { 'Err' : DepositErr };
export interface Dex {
  'cancelOrder' : ActorMethod<[OrderId], CancelOrderReceipt>,
  'clear' : ActorMethod<[], undefined>,
  'credit' : ActorMethod<[Principal, Token, bigint], undefined>,
  'deposit' : ActorMethod<[Token], DepositReceipt>,
  'getAllBalances' : ActorMethod<[], Array<Balance>>,
  'getBalance' : ActorMethod<[Token], bigint>,
  'getBalances' : ActorMethod<[], Array<Balance>>,
  'getDepositAddress' : ActorMethod<[], Uint8Array | number[]>,
  'getOrder' : ActorMethod<[OrderId], [] | [Order]>,
  'getOrders' : ActorMethod<[], Array<Order>>,
  'getSymbol' : ActorMethod<[Token], string>,
  'placeOrder' : ActorMethod<
    [Token, bigint, Token, bigint],
    OrderPlacementReceipt
  >,
  'whoami' : ActorMethod<[], Principal>,
  'withdraw' : ActorMethod<[Token, bigint, Principal], WithdrawReceipt>,
}
export interface Order {
  'id' : OrderId,
  'to' : Token,
  'fromAmount' : bigint,
  'owner' : Principal,
  'from' : Token,
  'toAmount' : bigint,
}
export type OrderId = number;
export type OrderPlacementErr = { 'InvalidOrder' : null } |
  { 'OrderBookFull' : null };
export type OrderPlacementReceipt = { 'Ok' : [] | [Order] } |
  { 'Err' : OrderPlacementErr };
export type Token = Principal;
export type WithdrawErr = { 'TransferFailure' : null } |
  { 'BalanceLow' : null };
export type WithdrawReceipt = { 'Ok' : bigint } |
  { 'Err' : WithdrawErr };
export interface _SERVICE extends Dex {}
