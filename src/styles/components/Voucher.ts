import styled from 'styled-components';

export const Container = styled.div`
  padding: 5px 20px 0px;

  @media (min-width: 768px) {
    padding-top: 40px;
  }

  div {
    display: flex;
    align-items: center;

    padding: 8px 16px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    main {
      margin-left: 12px;
      margin-right: auto;

      h4 {
        font-size: 0.875em;
        color: #3e3e3e;
        margin-bottom: 5px;
      }
      p {
        font-size: 0.875em;
        color: #717171;
      }
    }

    span {
      width: 34px;
      height: 34px;
    }
  }

  @media (min-width: 960px) {
    padding: 0;

    position: fixed;
    top: 79px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 9996;
    border-top: none;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: none;
      width: 100%;

      padding: 11px 16px;
      background: #50a773;
      border-radius: 0;

      h5 {
        font-size: 1.125em;
        color: white;
        padding: 0 28px;
        font-weight: 300;
      }

      span {
        width: 34px;
        height: 34px;
      }
    }
  }
`;
