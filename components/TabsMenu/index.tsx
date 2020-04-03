import React, { useState, ChangeEvent } from 'react';

// Components
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import About from './About';
import Skills from './Skills';
import Timeline from './Timeline';

// Others
import useStyles from './styles';

const TabsMenu = ({}: TabsMenuProps) => {
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
      {activeTab === 0 && <About />}
      {activeTab === 1 && <Skills />}
      {activeTab === 2 && <Timeline />}
    </>
  );
};

export interface TabsMenuProps {}

export default TabsMenu;
