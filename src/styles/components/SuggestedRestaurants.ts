import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 20px 14px 20px;

  h4 {
    font-size: 1rem;
    color: #3f3e3e;
    font-weight: 600;

    @media (min-width: 772px) {
      font-size: 1.25rem;
      line-height: 1.5625rem;
    }
  }

  div {
    main {
      display: flex;
    }

    ul {
      margin-top: 20px;
      list-style: none;

      @media (min-width: 772px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }

      @media (min-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 35px;
      }

      @media (min-width: 1204px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
      }
    }

    button {
      cursor: pointer;
      border: 1px solid #f0f0f0;
      background: #fff;
      color: #ea1d2c;
      width: 100%;
      margin-top: 20px;
      padding: 12px;
      font-size: 16px;
      border-radius: 4px;
      transition: 0.04s all;

      &:hover {
        background: #f0f0f0;

        @media (min-width: 960px) {
          color: #fff;
          background: #ea1d2c;
        }
      }
    }
  }
`;
