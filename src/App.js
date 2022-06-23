import React  from 'react';
import Tree from "./Components/Tree/Tree";
import {Box} from "@mui/material";
import Control from "./Components/Control/Control";

const App = () => {
    return (
            <Box display={"flex"}>
                <Tree/>
                <Control/>
            </Box>
    );
};

export default App;