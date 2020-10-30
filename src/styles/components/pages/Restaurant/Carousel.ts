import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;
