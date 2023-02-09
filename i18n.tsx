import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./app/assets/translation/${locale}.ts`)).default
}))