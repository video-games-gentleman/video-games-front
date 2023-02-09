import { useTranslations } from 'next-intl'

export default function SecondPage() {
  const t = useTranslations('common.languajes')
  return (
    <>
      <div>SecondPage</div>
      <p>{t('en')}</p>
      <p>{t('es')}</p>
    </>
  )
}
