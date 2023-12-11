import { ProfileLoader } from '@/features/account/ProfileLoader/ProfileLoader'

export async function generateStaticParams() {
  return [{ nickname: 'test' }]
}

export default function ProfilePage({ params }: { params: { address: string } }) {
  return <ProfileLoader address={params.address} />
}
