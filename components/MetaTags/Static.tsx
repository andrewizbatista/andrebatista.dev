import React from 'react';
import { Head } from 'next/document';

import appConfig from 'src/config';

const { appName, appThemeColor, defaultLocale } = appConfig;

const googleAnalytics: { __html: string } = {
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-151404517-1');`,
};

const StaticMetaTags = ({}: StaticMetaTagsProps) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta httpEquiv="Content-Language" content={defaultLocale.code} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="language" content={defaultLocale.code} />
      <meta name="reference" content={appName} />
      <meta name="theme-color" content={appThemeColor} />
      <meta name="robots" content="index,follow" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:400,700"
      />
      <link rel="stylesheet" href="/css/main.css" />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/meta/icon-192x192.png"
      />
      <script
        async
        type="text/javascript"
        src="https://www.googletagmanager.com/gtag/js?id=UA-151404517-1"
      />
      {/* eslint-disable-next-line react/no-danger */}
      <script dangerouslySetInnerHTML={googleAnalytics} />
    </Head>
  );
};

export interface StaticMetaTagsProps {}

export default StaticMetaTags;
