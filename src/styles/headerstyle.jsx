import React from 'react';
import styled from 'styled-components';

export const Headerstyle = styled.header`
    @keyframes menuhover{
            from{
                color: black;
                background-color: white;
            }
            to {
                color: white;
                background-color: #264027;
            }
        }

    display: flex;
    flex-direction: row;
    padding: 2%;
    padding-bottom: 0;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;

    .title{
        font-size: 69px;
        font-family: "Calladea", serif;
        font-weight: 700;
        font-style: italic;
    }
    .header-right{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        height: 100%;
        min-height: 0;
        align-items: center;
    }
     .menu{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .menu-a{
        font-family: 'Monospace', sans-serif;
        font-size: 14px;
        padding: 20px;
        text-decoration: none;
        color: black;
    }
    .menu-a:visited{
        color: black;
    }
    .menu-a:hover{
        animation: menuhover;
        animation-duration: .3s;
        animation-fill-mode: forwards;
    }
    `