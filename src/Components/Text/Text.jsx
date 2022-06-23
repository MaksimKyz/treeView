import React from 'react';
import {TextField} from "@mui/material";
import styled from "styled-components";

const Text = ({text,name,change}) => {

    const onChange = (e) =>{
        change(e.target.value,name)
    }

    return (
        <TextContainer>
            <TextField sx={{marginTop:'10px'}} value={text} label={name} onChange={onChange} id="standard-basic" variant="standard" />
        </TextContainer>
    );
};

export default Text;

const TextContainer = styled.div`
  input{
    color: #fff;
  }
  label{
    color: #386fa5;
  }

`