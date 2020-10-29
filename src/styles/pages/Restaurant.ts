import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  background: #333;
`;

export const Container = styled.div`
  main {
    padding: 12px 20px;

    h1 {
      color: #3e3e3e;
      font-size: 20px;
      font-weight: 500;
    }

    h2 {
      font-weight: 400;
      color: #717171;
      font-size: 0.875rem;
      margin: 0 0 4px 0;
      min-width: 50%;
    }

    .starred {
      color: #e7a74e;
      font-weight: bold;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;

        z-index: 10;
        top: 40px;
        position: absolute;
      }

      span {
        display: flex;
        align-items: center;
      }
    }

    span {
      font-size: 1rem;
      line-height: 1em;
      color: #a6a6a6;
      font-weight: 600;
    }
  }
`;
