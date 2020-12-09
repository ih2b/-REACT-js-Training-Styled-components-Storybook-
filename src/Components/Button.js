import React from 'react';
import styled, { css } from 'styled-components';

export const Button = styled.button`
margin: 10px;
padding: 20px;
${
    (props)=> props.darkMode && css`
    background: gray;
    `
}
`;
export const SalesButton= styled(Button)`
    background-color:orange;
    padding: 30px;
`;
