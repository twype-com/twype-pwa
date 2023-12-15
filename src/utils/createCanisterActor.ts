import { Identity, Actor, HttpAgent } from '@dfinity/agent'
import { idlFactory } from '@/declarations/twype_token/twype_token.did.js'

export const createCanisterActor = (agent: HttpAgent, canisterId: string) => {
  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
  })
}
