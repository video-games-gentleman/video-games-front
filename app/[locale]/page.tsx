import { LocalizedLink, useTranslations } from 'next-intl'

export default function Index() {
  const t = useTranslations('Index')
  return (
    <>
      <h1>{t('title')}</h1>
      <LocalizedLink href="/" locale="es">Switch to Spanish</LocalizedLink>
      <LocalizedLink href="/" locale="en">Switch to English</LocalizedLink>
    </>
  )
}