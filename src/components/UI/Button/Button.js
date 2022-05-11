import React from 'react';

//import from styles if you want to use CSS modules. 
//Make sure CSS file is renamed to "Button.module.css"
import styles from './Button.module.css';

//import styled from "styled-components";

//tact template literal (it is a javascript default feature).
//styled is an object imported from styled components library, 
//and from there we can access the button method
/*
const Button = styled.button`

  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  width: 100%;

@media (min-width: 768px) {
  width: auto;
}


&:focus {
  outline: none;
}

&:hover,
.button:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}

`;

*/



const Button = props => {
  return (
    //instead of className="string", CSS module uses {styles}
    //styles is an object that has every class defined as a property
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}; 

export default Button;
