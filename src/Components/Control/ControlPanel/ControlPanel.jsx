import React from 'react';
import {v4 as uuidv4} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {download} from "../../../Utils/utils";
import {Box} from "@mui/material";
import styled from "styled-components";
import CustomButton from "../../CustomButton/CustomButton";

const ControlPanel = () => {
    const arr = useSelector(state => state.NodeArr)
    const dispatch = useDispatch()
    const selectedNode = useSelector(state => state.selectedNode)

    const save = () =>{
        arr.forEach((node)=>{delete node["nodes"];})
        download(JSON.stringify(arr), "newFile.json", "text/plain");
    }

    const load = (e) =>{
        const reader = new FileReader()
        reader.onload = ev =>{
            dispatch({type:'LOAD_FILE',payload: JSON.parse(ev.target.result)})
        }
        reader.readAsText(e.target.files[0])
    }

    const addNode = () =>{
        dispatch({type:'ADD_NODE',payload:
                {
                    key: uuidv4(),
                    parentId: selectedNode.replace(/.+(\/)/,'')||arr[0].key,
                    label:'New node',
                    data:{
                        country:"Moscow",
                        age:18,
                    },
                    css:{
                        color:'#99a0c9',
                        background:'transparent'
                    }
                },
        })
    }

    return (
        <Box position={'relative'} display={"flex"} flexDirection={"column"}>
            <Box sx={{mb:1}}>
                <CustomButton variant={'contained'} onClick={addNode}>Добавить элемент</CustomButton>
            </Box>
            <Box sx={{mb:1}}>
                <CustomButton  onClick={save}>Save</CustomButton>
            </Box>
            <label style={{position:'relative'}}>
                <CustomButton>Load</CustomButton>
                <CustomFilePicker onChange={load} type="file" id="upload-photo"/>
            </label>
        </Box>
    );
};

export default ControlPanel;


const CustomFilePicker = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  border: 1px solid red;
  left: 0;
  top: 0;
  opacity: 0;
`