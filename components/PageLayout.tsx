import React from 'react';

import MetaTags from 'components/Core/MetaTags';

import IPage from 'app/entities/Page';

const PageLayout = ({ page, children }: IPageLayout): any => {
  return (
    <>
      <MetaTags page={page} />
      {children}
    </>
  );
};

export default PageLayout;

export interface IPageLayout {
  page: IPage;
  children: any;
}
