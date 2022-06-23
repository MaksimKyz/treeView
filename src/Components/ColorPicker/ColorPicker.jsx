import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import { SketchPicker } from 'react-color';
import {useOnClickOutside} from "../../hooks/useOnClickOutside";


const ColorPicker = ({defaultColor,colorChange,name}) => {
    const [color, setColor] = useState(defaultColor);
    const [isVisible,setVisible] = useState(false)
    const ref = useRef()

    useEffect(()=>{
        setColor(defaultColor)
    },[defaultColor])

    const changeColor = (color) =>{
        setColor(color.hex)
    }
    const changeVisible = () =>{
        setVisible(!isVisible)
    }

    useOnClickOutside(ref, changeVisible);

    return (
        <ColorPickerContainer>
            <Name>{name}</Name>
            <ColorPickerContent color={color} onClick={changeVisible}/>
            {isVisible && <div ref={ref}><Picker
                color={ color }
                onChange={ changeColor }
                onChangeComplete={()=>colorChange(color,name)}
            /></div>}
        </ColorPickerContainer>
    );
};

export default ColorPicker;

const ColorPickerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 300px;
  margin-top: 10px;
`

const Name = styled.div`
  width: 200px;
`

const ColorPickerContent = styled.div`
    width: 30px;
    height: 30px;
    background: ${props => props.color};
    cursor: pointer;
    border:1px solid #34a5dd;
`

const Picker = styled(SketchPicker)`
  position: absolute;
  width: 200px;
  left: 0;
  top: 40px;
  
`