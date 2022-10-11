import React from 'react';
import { Gi3DGlasses } from "react-icons/gi";
import { FaAlipay,FaTimes,FaPen,FaRegCircle } from "react-icons/fa";

const MyIcons = ({name}) => {
    switch(name){
        case 'circle':
            return <FaRegCircle/>
        case 'cross':
            return <FaTimes/>
        default:
            return <FaAlipay/>        
    }
}

export default MyIcons;