import React from 'react';
import {SyncLoader} from "react-spinners";
import styled from 'styled-components';
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

`;
const Loading=()=>{
    return (
        <LoadingContainer>
            <SyncLoader/>
        </LoadingContainer>
    )
}
export default Loading;