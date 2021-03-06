import React from 'react';
import styled from 'styled-components';
const Nav = styled.div`
    position: sticky;
    width: 100%;
    top: 0;
    left: 0;
    background: grey;
    color :white;
    margin:0 auto;
    text-align:center;

`;

const Menu = styled.li`
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    background: grey

`;

export const Shell = (props) => {
    const { children } = props;
    return (
    <>
    <Nav>
     <h3>DigiApp</h3>  
        
    </Nav>
    { children }
  
    <Menu>
       
        <li>
            Assessments
        </li>
    
        <li>
            Profile
        </li>
    
        <li>
            About
        </li>
        
    </Menu>
     
        
   
    </>
    )
};

export default Shell;