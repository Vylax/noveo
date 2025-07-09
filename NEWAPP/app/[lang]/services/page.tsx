import { redirect } from 'next/navigation'
import { type Locale } from '@/lib/get-dictionary'

export default function ServicesPage({
  params,
}: {
  params: { lang: Locale }
}) {
  redirect(`/${params.lang}/solutions`)
} 