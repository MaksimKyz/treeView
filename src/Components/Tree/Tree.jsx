import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import TreeMenu from "react-simple-tree-menu";
import {list_to_tree} from "../../Utils/utils";
import "react-simple-tree-menu/dist/main.css";
import Item from "./Item";


const Tree = () => {
    const NodeArr = useSelector(state => state.NodeArr)
    const dispatch = useDispatch()

    const SelectNode = (node) =>{
        dispatch({type:'SELECT_NODE',payload: node.key})
    }

    return (
        <TreeContainer>
            <TreeContent>
                <TreeMenu
                    data={list_to_tree(NodeArr)}
                    onClickItem={SelectNode}
                >
                    {
                        ({ items }) => (
                            <Item items={items}/>
                        )
                    }
                </TreeMenu>
            </TreeContent>
        </TreeContainer>
    );
};
export default Tree;


const TreeContainer = styled.div`
  padding-top: 30px;
  width: 70%;
  height: 100vh;
  display: flex;
  justify-content: center;
  font-size: 28px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
   display: none;
  }
`
const TreeContent = styled.div`
  width: 1000px;
`