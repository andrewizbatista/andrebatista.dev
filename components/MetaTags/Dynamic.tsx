import React from 'react';
import Head from 'next/head';

const DynamicMetaTags = ({
  page: { metaTitle, metaDescription, metaKeywords, metaImage },
}: DynamicMetaTagsProps) => {
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

export interface DynamicMetaTagsProps {
  page: Page;
}

export default DynamicMetaTags;
