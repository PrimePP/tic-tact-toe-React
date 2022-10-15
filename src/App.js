import MyIcons from "./components/icons";
import "bootstrap/dist/css/bootstrap.css";
import { Card, CardBody, Container, Col, Row, Button } from "reactstrap";
import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";


const itemsArray = new Array(9).fill('empty');

function App() {
  //states
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  //functions
  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("")
    itemsArray.fill("empty",0,8);
  };

  const checkIsWinner = () => {
    if (
      itemsArray[0] === itemsArray[1] &&
      itemsArray[0] === itemsArray[2] &&
      itemsArray[0] !== "empty"
    ) {
      setWinMessage(`${itemsArray[0]} won`);
    } else if (
      itemsArray[3] !== "empty" &&
      itemsArray[3] === itemsArray[4] &&
      itemsArray[4] === itemsArray[5]
    ) {
      setWinMessage(`${itemsArray[3]} won`);
    } else if (
      itemsArray[6] !== "empty" &&
      itemsArray[6] === itemsArray[7] &&
      itemsArray[7] === itemsArray[8]
    ) {
      setWinMessage(`${itemsArray[6]} won`);
    } else if (
      itemsArray[0] !== "empty" &&
      itemsArray[0] === itemsArray[3] &&
      itemsArray[3] === itemsArray[6]
    ) {
      setWinMessage(`${itemsArray[0]} won`);
    } else if (
      itemsArray[1] !== "empty" &&
      itemsArray[1] === itemsArray[4] &&
      itemsArray[4] === itemsArray[7]
    ) {
      setWinMessage(`${itemsArray[1]} won`);
    } else if (
      itemsArray[2] !== "empty" &&
      itemsArray[2] === itemsArray[5] &&
      itemsArray[5] === itemsArray[8]
    ) {
      setWinMessage(`${itemsArray[2]} won`);
    } else if (
      itemsArray[0] !== "empty" &&
      itemsArray[0] === itemsArray[4] &&
      itemsArray[4] === itemsArray[8]
    ) {
      setWinMessage(`${itemsArray[0]} won`);
    } else if (
      itemsArray[2] !== "empty" &&
      itemsArray[2] === itemsArray[4] &&
      itemsArray[4] === itemsArray[6]
    ) {
      setWinMessage(`${itemsArray[2]} won`);
    }
  };

  const changeItem = (itemNumber) => {
    if(winMessage){
      return toast(winMessage,{type:'success'})
    }
    if(itemsArray[itemNumber] === "empty"){
      itemsArray[itemNumber] = isCross ? 'cross':'circle';
      setIsCross(!isCross);
    }else{
      return toast('position already filled',{type:"error"})
    }
    checkIsWinner();
  };


  return (
    
   <Container className="p-5">
    <ToastContainer position="bottom-center"/>
    <Row>
      <Col md ={6} className='offset-md-3'>
      {winMessage ? (
        <div className="mt-2 mb-2">
          <h1 className="text-primary text-uppercase text-center">
            {winMessage}
          </h1>
          <Button
          color="success"
          block
          onClick={reloadGame}>Reload the Game</Button>
        </div>
      ):
      (
        <h1 className="text-center text-warning">
          {isCross ? "Cross" : "Circle"}'s turns
        </h1>
      ) }
        <div className="grid">
          {itemsArray.map((item,indexNumber) => (
            <Card color="warning"  onClick={()=> changeItem(indexNumber) }>
              <CardBody className="box">
                <MyIcons name = {item}/>
              </CardBody>
            </Card>
          ))}
        </div>
      </Col>
    </Row>
   </Container>
  )
}

export default App;
