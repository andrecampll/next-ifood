import styled from 'styled-components';

export const Container = styled.div`
  min-width: 749px;
  min-height: 470px;
  display: flex;

  aside {
    display: flex;
    flex-flow: nowrap row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    width: 100%;

    .blur {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-filter: blur(30px) brightness(65%);
      filter: blur(30px) brightness(65%);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      z-index: 10;
    }

    .food-cover {
      max-width: 100%;
      z-index: 11;
      max-height: 40vh;
      position: relative;
    }
  }
`;
