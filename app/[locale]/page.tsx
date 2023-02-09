import { LocalizedLink, useTranslations } from 'next-intl'
import { use } from 'react';

async function getData() {
	return await (await fetch('https://video-game-project-2wjah2imp-mt-ivan.vercel.app/video-games', { cache: "no-store" })).json();
}

export default function Index() {
  const t = useTranslations('index')
  const characters = use(getData());
  console.log("🚀 ~ file: page.tsx:11 ~ Index ~ characters", characters)
  return (
    <>
      <h1>{t('title')}</h1>
      <LocalizedLink href="/" locale="es">Switch to Spanish</LocalizedLink>
      <br />
      <LocalizedLink href="/" locale="en">Switch to English</LocalizedLink>
      <br />
      <LocalizedLink href={`/second-page`}>Go to second page</LocalizedLink>
    </>
  )
}