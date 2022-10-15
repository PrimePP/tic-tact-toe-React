import React from 'react';

import { FaAlipay,FaTimes,FaRegCircle } from "react-icons/fa";

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