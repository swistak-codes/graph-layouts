import styled from 'styled-components';

export const ControlsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;

  button {
    cursor: pointer;
  }

  input {
    width: 80px;
  }
`;
