import styled from 'styled-components';

export const Container = styled.div`
  padding: 5px 20px 14px;

  div {
    display: flex;
    align-items: center;

    padding: 12px 16px;
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
`;
