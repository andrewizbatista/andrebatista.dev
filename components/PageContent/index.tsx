import React, { useState, ChangeEvent } from 'react';

// Components
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import About from './About';
import Skills from './Skills';
import Timeline from './Timeline';

// Others
import useStyles from './styles';

const PageContent = ({ me, skills, timeline }: PageContentProps) => {
  const classes = useStyles();

  const [activeTab, setActiveTab] = useState<number>(0);

  const handleChange = (e: ChangeEvent<{}>, value: number) =>
    setActiveTab(value);

  return (
    <>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        className={classes.wrapper}
      >
        <Tab label="About" />
        <Tab label="Skills" />
        <Tab label="Timeline" />
      </Tabs>
      {activeTab === 0 && <About me={me} />}
      {activeTab === 1 && <Skills me={me} skills={skills} />}
      {activeTab === 2 && <Timeline me={me} timeline={timeline} />}
    </>
  );
};

export interface PageContentProps {
  me: Me;
  skills: Skills;
  timeline: Timeline;
}

export default PageContent;
