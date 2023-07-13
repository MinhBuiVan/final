import { useState } from "react";
import Button from "./Button";
import "./App.css";
import Input from "./Input";
import { Image } from "antd";
import calculatorsvg from '../assets/calculator.png'

function Calculator() {
  const [input, setInput] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");
  const [operator, setOpeartor] = useState("");
  const [result,setResult]= useState("");
  
  
  const handleInputNum = (value) => {
    setInput(input + value);
  };

  
  const handleClear = () => {
    setInput("");
    setOpeartor("");
    setPreviousNumber("");
  };

  const handleDecimal = (val) => {
    if (input.indexOf(".") === -1) {
      setInput(input + val);
    }
  };
  
  const handleDelete = () => {
    setInput(`${input}`.slice(0,-1));
  };
  
  const handleOperator = (opear) => {
    if(input!==""){
      if (previousNumber !== "" && result !== "" && operator!=="") {
      let computedResult = "";
      if (operator === "add") {
        computedResult = (parseFloat(previousNumber) + parseFloat(input));
      } else if (operator === "sub") {
        computedResult = (parseFloat(previousNumber) - parseFloat(input));
      } else if (operator === "mul") {
        computedResult = (parseFloat(previousNumber) * parseFloat(input));
      } else if (operator === "div") {
        computedResult = (parseFloat(previousNumber) / parseFloat(input));
      }
      setInput(computedResult.toString());
      setPreviousNumber(computedResult.toString());
    } 
    else {
      setPreviousNumber(input);
      setOpeartor(opear);
    }
    setInput("");
    setResult(input);
    setOpeartor(opear);
    } 
    else{
      setOpeartor(opear);
    }
  };

  
  const evaluate = () => {
    if(input!=="" && operator!=="" && previousNumber!==""){
    if (operator === "add") {
      setInput(parseFloat(previousNumber) + parseFloat(input));
    } else if (operator === "sub") {
      setInput(parseFloat(previousNumber) - parseFloat(input));
    } else if (operator === "div") {
      setInput(parseFloat(previousNumber) / parseFloat(input));
    } else if (operator === "mul") {
      setInput(parseFloat(previousNumber) * parseFloat(input));
    }
    setPreviousNumber(input);
    setOpeartor("");
    setResult("");
    }
  };

  return (
    <>
      <div className="App">
        <div className="cal_parent">
          <div className="cal_header">
            <h1 className="cal_title">Calculator</h1>
            <Image 
              width={80}
              src={calculatorsvg}
              preview={false}
              style={{
                marginTop: '-20px'
              }}
            />
          </div>
          <div className="calc-wrapper">
            <Input input={input} ></Input>

            <div className="button_cal">
              <div className="row_cal">
                <Button onClick={() => handleClear()}>C</Button>
                <Button onClick={() => handleDelete()}>CE</Button>
              </div>
            
              <div className="row_cal">
                <Button onClick={() => handleInputNum(1)}>1</Button>
                <Button onClick={() => handleInputNum(2)}>2</Button>
                <Button onClick={() => handleInputNum(3)}>3</Button>
                <Button onClick={() => handleOperator("div")}>/</Button>

              </div>
              <div className="row_cal">
                <Button onClick={() => handleInputNum(4)}>4</Button>
                <Button onClick={() => handleInputNum(5)}>5</Button>
                <Button onClick={() => handleInputNum(6)}>6</Button>
                <Button onClick={() => handleOperator("sub")}>-</Button>

              </div>
              <div className="row_cal">
                <Button onClick={() => handleInputNum(7)}>7</Button>
                <Button onClick={() => handleInputNum(8)}>8</Button>
                <Button onClick={() => handleInputNum(9)}>9</Button>
                <Button onClick={() => handleOperator("add")}>+</Button>

              </div>
              <div className="row_cal">
                <Button onClick={() => handleDecimal(".")}>.</Button>
                <Button onClick={() => handleInputNum(0)}>0</Button>
                <Button onClick={() => evaluate()}>=</Button>
                <Button onClick={() => handleOperator("mul")}>*</Button>
              </div>
            </div>
          </div>
        </div>
              
      </div>
    </>
  );
}

export default Calculator;