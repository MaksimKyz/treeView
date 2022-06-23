import React from 'react';
import {Button} from "@mui/material";

const CustomButton = ({variant,onClick,...props}) => {
    return (
        <div>
            <Button sx={{width:'100%'}} onClick={onClick} variant={variant||'outlined'}>{props.children}</Button>
        </div>
    );
};

export default CustomButton;