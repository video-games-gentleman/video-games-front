import { LocalizedLink, useTranslations } from 'next-intl'

export default function Index() {
  const t = useTranslations('index')

  return (
    <>
      <h1 className='text-red-600'>{t('title')}</h1>
      <LocalizedLink href="/" locale="es">Switch to Spanish</LocalizedLink>
      <br />
      <LocalizedLink href="/" locale="en">Switch to English</LocalizedLink>
    </>
  )
}