import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background: grey

`;

export const Shell = (props) => {
    const { children } = props;
    return (
    <>
    { children }
    <Menu>
        <div>Assessments</div>
        <div>Profile</div>
    </Menu>
    </>
    )
};

export default Shell;