import { NfIdContext } from '@/providers/NfidProvider'
import { useContext } from 'react'

export const useNfid = () => useContext(NfIdContext)
