import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './../../style/Features.css'
import React from 'react';

import PlanAndTrack from './tab1_plan_and_track'
import SupportAndFix from './tab2_support_and_fix'
import CodeBuildAndShip from './tab3_code_build_and_ship'
import Collaborate from './tab4_collaborate'

// import PlanAndTrack from './Tabs/PlanAndTrack';
// import SupportAndFix from './Tabs/SupportAndFix';
// import CodeBuildAndShip from './Tabs/CodeBuildAndShip';
// import Collaborate from './Tabs/Collaborate';

// import HeadingPlanAndTrack from './Heading/heading_plan_and_track';
// import HeadingSupportAndFix from './Heading/heading_support_and_fix';
// import HeadingCodeBuild from './Heading/heading_code_build';
// import HeadingCollaborate from './Heading/heading_collaborate';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Features() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{width: '80%', fontWeight: 'bold'}}> 
            <h1 className='heading'>Features</h1>
            <Box sx={{ width: '120%', paddingLeft: '22px'}}>
                <Box >
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="PlanAndTrack"{...a11yProps(0)} />
                        <Tab label="SupportAndFix" {...a11yProps(1)} />
                        <Tab label="CodeBuildAndShip" {...a11yProps(2)} />
                        <Tab label="Collaborate" {...a11yProps(3)} />
                    </Tabs>
                </Box>
            <TabPanel value={value} index={0}>
                    <PlanAndTrack />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    < SupportAndFix/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                   <CodeBuildAndShip/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Collaborate/>
                </TabPanel>
            </Box>
        </div>
    );
}