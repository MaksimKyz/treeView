import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {v4 as uuidv4} from "uuid";

const defaultState = {
    NodeArr:[
        {
            key: uuidv4(),
            parentId: "0",
            label: "Maksim",
            data:{
                country:"Moscow",
                age:18,
            },
            css:{
                color:'#99a0c9',
                background:'transparent'
            }
        },
    ],
    selectedNode:''
}

const reducer = (state=defaultState,action)=>{
    switch (action.type){
        case "ADD_NODE":
            return {...state,NodeArr: [...state.NodeArr,action.payload]}
        case "SELECT_NODE":
            return {...state,selectedNode: action.payload}
        case "LOAD_FILE":
            return {...state,NodeArr: action.payload}
        case "CHANGE_NODE":
            return {...state,NodeArr: state.NodeArr.map(
                    node => node.key === action.payload.key
                        ? action.payload
                        : node
                ),}

        default:
            return state
    }
}

const store = createStore(reducer)



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

