import { create } from 'zustand'

type State = {
  walletAddress: string | null
  livekitToken: string | null
}

type Action = {
  updateWalletAddress: (walletAddress: State['walletAddress']) => void
  updateLivekitToken: (livekitToken: State['livekitToken']) => void
}

const useUserStore = create<State & Action>((set) => ({
  walletAddress: null,
  livekitToken: null,
  updateWalletAddress: (walletAddress) => set(() => ({ walletAddress: walletAddress })),
  updateLivekitToken: (livekitToken) => set(() => ({ livekitToken: livekitToken })),
}))

export default useUserStore
