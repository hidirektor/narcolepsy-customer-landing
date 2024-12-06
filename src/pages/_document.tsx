import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const style = {
    '--header-height': '74px'
  }
  return (
      <Html lang="en" data-bs-theme="dark" style={{'--header-height': '74px'} as React.CSSProperties}>
          <Head/>
          <meta/>
          <link rel="apple-touch-icon" sizes="57x57" href="/assets/images/favicon/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/assets/images/favicon/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/assets/images/favicon/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/assets/images/favicon/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/assets/images/favicon/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/assets/images/favicon/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/assets/images/favicon/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/assets/images/favicon/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/favicon/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/assets/images/favicon/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
          <link rel="icon" type="image/svg+xml" href="/assets/images/favicon/favicon.ico"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>NarcoLepsy - Read Comics, Manga & Manhwa</title>
          <link rel="stylesheet" href="/vendor/font-awesome/css/all.min.css"/>
          <link rel="stylesheet" href="/vendor/iconly/css/style.css"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link
              href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&amp;display=swap"
              rel="stylesheet"/>
          <body>
          <Main/>
          <NextScript/>
          </body>
      </Html>
  )
}
