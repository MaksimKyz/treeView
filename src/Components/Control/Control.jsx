import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import ColorPicker from "../ColorPicker/ColorPicker";
import Tabs from "../Tabs/Tabs";
import Text from "../Text/Text";
import ControlPanel from "./ControlPanel/ControlPanel";
import {Box} from "@mui/material";
import useDidMountEffect from "../../hooks/useDidMountEffect";


const Control = () => {
    const dispatch = useDispatch()
    const selectedNode = useSelector(state => state.selectedNode)
    const arr = useSelector(state => state.NodeArr)
    const [node,setNode] = useState(arr[0])

    useEffect(()=>{
        dispatch({type:'CHANGE_NODE',payload:node})
    },[node])

    useDidMountEffect(()=>{
        setNode(arr.find((node)=>node.key === selectedNode.replace(/.+(\/)/,'')))
    },[selectedNode])



    const changeLabel = (e) =>{
        setNode({...node, label: e, key: node.key.replace(/.+(\/)/,'')})
    }

    const changeNode = (e,field)=>{
        setNode({...node,data:{...node.data,[field]:e}, key: node.key.replace(/.+(\/)/,'')})
    }

    const changeCSSNode = (e,field) =>{
        setNode({...node,css:{...node.css,[field]:e}, key: node.key.replace(/.+(\/)/,'')})
    }

    return (
        <ControlContainer>
            <Box >
                <Tabs>
                    <div>
                        <Text text={node.label} name={'label'} change={changeLabel}/>
                        <Text text={node.data.country} name={'country'} change={changeNode}/>
                        <Text text={node.data.age} name={'age'} change={changeNode}/>
                    </div>
                    <div>
                        <ColorPicker name={'color'} defaultColor={node.css.color} colorChange={changeCSSNode}/>
                        <ColorPicker name={'background'} defaultColor={node.css.background} colorChange={changeCSSNode}/>
                    </div>
                </Tabs>
            </Box>
            <ControlPanel/>
        </ControlContainer>
    );
};

export default Control;



const ControlContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
  background: #091929;
`