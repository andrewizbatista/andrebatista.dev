import React from 'react';
import Head from 'next/head';

import IPage from 'app/entities/Page';

const MetaTags = ({
  page: { metaTitle, metaDescription, metaKeywords, metaImage },
}: IMetaTags) => {
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}

      <meta name="og:title" content={metaTitle} />
      <meta name="og:description" content={metaDescription} />
      {metaImage && <meta name="og:image" content={metaImage} />}
    </Head>
  );
};

interface IMetaTags {
  page: IPage;
}

export default MetaTags;
