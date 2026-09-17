import React, { useState } from "react";
import "./calculadora.css";
import Container from "@mui/material/Container";

    

export default function Calculadora() {
    const [resultado, setResultado] = useState("0");

    function inputResultado(e) {
       var input = e.target.value;
       if (resultado === "0") {
        setResultado(input);
       } else {
        setResultado(resultado + input);
       }
    }   

    function apagar() {
        setResultado("0");
    }

    function porcentagem() {
        setResultado(resultado / 100);
    }
    
    function calcular() {
        try {
            setResultado(eval(resultado));
        } catch (error) {
            setResultado("Error");
        }
    }

  return (
    <div>
        <div style={{ marginTop: '10em' }}></div>
    <Container maxWidth="xs">
      <div className="fundo">
        <h1 className="resultado">{resultado}</h1>
        <button className="apagar" onClick={apagar}>
          AC
        </button>
        <button className="operadores" onClick={inputResultado} value="(">(</button>
        <button className="operadores" onClick={inputResultado} value=")">)</button>
        <button className="operadores" onClick={inputResultado} value="/"> / </button>
        <button className="numeros" onClick={inputResultado} value="7">7</button>    
      <button className="numeros" onClick={inputResultado} value="8">8</button>
      <button className="numeros" onClick={inputResultado} value="9">9</button>
      <button className="operadores" onClick={inputResultado} value="*">*</button>
      <button className="numeros" onClick={inputResultado} value="4">4</button>
      <button className="numeros" onClick={inputResultado} value="5">5</button>
      <button className="numeros" onClick={inputResultado} value="6">6</button> 
      <button className="operadores" onClick={inputResultado} value="-">-</button>    
      <button className="numeros" onClick={inputResultado} value="1">1</button>
      <button className="numeros" onClick={inputResultado} value="2">2</button>
      <button className="numeros" onClick={inputResultado} value="3">3</button>
      <button className="operadores" onClick={inputResultado} value="+">+</button>
      <button className="numeros" onClick={inputResultado} value="0">0</button>     
      <button className="numeros" onClick={inputResultado} value=".">.</button>    
       <button className="igual" onClick={calcular}>
        =
      </button>
      <button className="operadores" onClick={porcentagem}>
        %
      </button>
    </div>
    </Container>
    </div>
  )
}