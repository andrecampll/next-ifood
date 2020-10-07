import styled from 'styled-components';

export const Container = styled.footer`
  background: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 2;
  border-top: none;
  height: 50px;

  div {
    padding: 10px 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 0.75rem;
        margin-top: 2px;
        color: #3e3e3e;
      }
    }
  }
`;
