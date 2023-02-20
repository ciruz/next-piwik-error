import '@/styles/globals.css'

import PiwikProProvider from '@piwikpro/next-piwik-pro'

export default function App({ Component, pageProps }) {
  return <>
    <PiwikProProvider
      accountName='accountName'
      containerId='43e4bca4-e220-43df-acfc-40fef7e25105'>
      <Component {...pageProps} />
    </PiwikProProvider>
  </>
}
