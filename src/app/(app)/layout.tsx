import { ModalContainer, ModalProvider } from '@faceless-ui/modal'
import React from 'react'
import { Inter, Outfit } from 'next/font/google'
import Image from 'next/image'

import { CloseModalOnRouteChange } from '../../components/CloseModalOnRouteChange'
import { Header } from '../../components/Header'
import '../../css/app.scss'

// Using Inter as a fallback for Avenir Next as it's similar in style
const avenirNext = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-avenir'
})

// Using Outfit as a fallback for Built Titling for headers
const headingFont = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-heading'
})

export const metadata = {
  metadataBase: new URL('https://kasher.com'),
  title: 'KASHER | Lighter Tool',
  description: 'KASHER - The premium lighter tool solution. Designed to enhance your smoking experience.',
  keywords: 'lighter tool, kasher, smoking accessories, premium lighter tool',
  applicationName: 'KASHER | Lighter Tool',
  robots: 'index, follow',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Kasher Inc.' }],
  creator: 'Kasher Inc.',
  publisher: 'Kasher Inc.',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kasher.com',
    title: 'KASHER | Lighter Tool',
    description: 'KASHER - The premium lighter tool solution. Designed to enhance your smoking experience.',
    siteName: 'KASHER',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KASHER - Lighter Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KASHER | Lighter Tool',
    description: 'KASHER - The premium lighter tool solution. Designed to enhance your smoking experience.',
    images: ['/images/og-image.jpg'],
    creator: '@kashertools',
    site: '@kashertools',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#9aca3c',
  appleWebApp: {
    title: 'KASHER',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
  appLinks: {
    ios: {
      url: 'https://kasher.com/',
      app_store_id: 'id123456789',
    },
    android: {
      package: 'com.kasher.app',
      app_name: 'KASHER',
    },
    web: {
      url: 'https://kasher.com/',
      should_fallback: true,
    },
  },
  category: 'lifestyle',
  other: {
    'apple-itunes-app': 'app-id=123456789',
    'msapplication-TileColor': '#9aca3c',
    'msapplication-config': '/icons/browserconfig.xml',
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${avenirNext.variable} ${headingFont.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#9aca3c" />
        
        {/* Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* iOS Splash Screens */}
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-2048-2732.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-1668-2388.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-1536-2048.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-1242-2688.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-1125-2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-828-1792.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/icons/apple-splash-750-1334.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://kasher.com" />
      </head>
      <body>
        <React.Fragment>
          <div className="text-container">
            <div className="logo-container">
              <Image src="/images/kasher-logo.svg" alt="Kasher Logo" className="logo-image" width={150} height={150} priority />
            </div>
            <span className="logo-text">KASHER</span>
            <span className="tagline">LIGHTER TOOL</span>
          </div>
          <div className="gradient-bg">
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
            <div className="gradients-container">
              <div className="g1"></div>
              <div className="g2"></div>
              <div className="g3"></div>
              <div className="g4"></div>
              <div className="g5"></div>
              <div className="interactive"></div>
            </div>
          </div>
          <ModalProvider classPrefix="form" transTime={0} zIndex="var(--modal-z-index)">
            <CloseModalOnRouteChange />
            <Header />
            {/* <Component {...pageProps} /> */}
            {children}
            <ModalContainer />
          </ModalProvider>
        </React.Fragment>
      </body>
    </html>
  )
}
