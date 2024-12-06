import React from 'react';
import styled from 'styled-components';
import tarzan from  '../images/tarzan.jpg'

export const HeroStyled = styled.div`
   
    background-color: #0073DB;
    background-image: url(${tarzan});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: 70%;
    
    max-width: 100%;
    height: 40%;
    padding-top: 30%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .heroinner{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        height: 100%;
    }
    
    .typingEffect{
        font-size: x-large;
    }
`