import styled from 'styled-components';

export const Container = styled.div`
  min-width: 222px;
  margin-left: 20px;

  & + & {
    margin-left: 10px;
  }

  div {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;

    max-width: 220px;
    max-height: 262px;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);

    header {
      width: 100%;
      height: 100px;

      img {
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    main {
      padding: 10px;

      h4 {
        color: #3e3e3e;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.25rem;
        margin-bottom: 9px;
      }

      p {
        font-weight: lighter;
        color: #717171;
        word-break: break-word;
        margin-bottom: 10px;
        font-size: 0.775rem;
        margin-bottom: 35%;
      }

      h5 {
        color: #50a773;
        font-size: 0.875rem;
        line-height: 1.125rem;
        font-weight: 500;
      }
    }
  }
`;
