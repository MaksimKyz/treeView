import React from 'react';
import styled from "styled-components";
import {ItemComponent} from "react-simple-tree-menu";


const Item = ({items}) => {
    return (
        <TreeItem>
            {items.map(({ key, ...props }) => (
                <ItemComponent key={key}  style={{...props.css,fontsize:'18px'}} {...props} />
            ))}
        </TreeItem>
    );
};

export default Item;

const TreeItem = styled.ul`
  list-style-type:none;
  *{
    color: #fff
  }
`

