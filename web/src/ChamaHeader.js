import React, { useState } from 'react';
import Header from './Header';


//passando propriedade pro componente header
//usar div ou fragment
function ChamaHeader() {

  const [counter, setCounter] = useState(0);

  function incrementCounter(){
    setCounter(counter + 1);
  }

  return (

      <>       
        <Header  title = "Daschboard 1"/> 
         <h2> Contador:{counter} </h2>
         <button onClick = {incrementCounter}> Incrementar </button>
      </>

  );
}

export default ChamaHeader;
