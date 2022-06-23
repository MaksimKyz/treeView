import React from 'react';
import {Box, Tab} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@material-ui/lab";

const Tabs = ({children}) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} >
                    <Tab sx={{color:'#fff'}} label="Date" value="1" />
                    <Tab sx={{color:'#fff'}} label="Css" value="2" />
                </TabList>
            </Box>
            {children.map((child,index)=>(
                <React.Fragment key={index}>
                    <TabPanel value={String(index+1)}>
                        {child}
                    </TabPanel>
                </React.Fragment>
            ))}
        </TabContext>

    );
};

export default Tabs;