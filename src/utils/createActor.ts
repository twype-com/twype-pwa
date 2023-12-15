import { Identity, Actor, HttpAgent } from '@dfinity/agent'
import { idlFactory } from '@/declarations/twype_token/twype_token.did.js'

/**
 * Creates an actor for the Backend canister
 *
 * @param {{agentOptions: import("@dfinity/agent").HttpAgentOptions, actorOptions: import("@dfinity/agent").ActorConfig}} options
 * @returns {import("@dfinity/agent").ActorSubclass<import("../../../declarations/twype_token/twype_token.did")._SERVICE>}
 */
export function createActor(identity: Identity) {
  let options: any = {
    agentOptions: {
      identity,
    },
  }

  const hostOptions = {
    host: 'http://localhost:8000/',
  }
  if (!options) {
    options = {
      agentOptions: hostOptions,
    }
  } else if (!options.agentOptions) {
    options.agentOptions = hostOptions
  } else {
    options.agentOptions.host = hostOptions.host
  }

  const agent = new HttpAgent({ ...options.agentOptions })

  // Fetch root key for certificate validation during development
  if (process.env.DFX_NETWORK === 'local') {
    console.log('fetchRootKey')
    agent.fetchRootKey().catch((err) => {
      console.warn('Unable to fetch root key. Check to ensure that your local replica is running')
      console.error(err)
    })
  }

  // Creates an actor with using the candid interface and the HttpAgent
  return Actor.createActor(idlFactory, {
    agent,
    canisterId: 'br5f7-7uaaa-aaaaa-qaaca-cai',
    ...options?.actorOptions,
  })
}
