import React from 'react';


//header é um componte que recebe uma propriedade (props) por parametro
function Header (props){

    return(

        <h1>{props.title}</h1> 

    );
}


export default Header;