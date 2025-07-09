import { redirect } from 'next/navigation'
import { type Locale } from '@/lib/get-dictionary'

export default async function AboutPage({
  params,
}: {
  params: { lang: Locale }
}) {
  // Redirect to a-propos for consistency
  redirect(`/${params.lang}/a-propos`)
} 