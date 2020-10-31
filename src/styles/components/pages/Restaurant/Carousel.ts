import styled from 'styled-components';

export const Container = styled.div`
  min-height: 265px;
  width: 100%;
  display: flex;
  margin-bottom: 25px;
  margin-top: 20px;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  @media (min-width: 560px) {
    min-height: 336px;
  }
`;
