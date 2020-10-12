import styled from 'styled-components';

export const Container = styled.header`
  padding: 17px 20px 14px 20px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  background: #fff;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 9997;
  border-top: none;
    
  div {
    span {
      font-size: 0.875rem;
      color: rgb(166, 165, 165);
      text-transform: uppercase;
      line-height: 1.15;
    }

    main {
      display: flex;
      align-items: center;

      h3 {
        font-size: 1rem;
        font-weight: 600;
        color: #3e3e3e;
        text-align: left;
        margin: 2px 5px 0px 0;
      }
    }
  }
`;

export const Title = styled.h1`
  color: #EA1D2C;
`;
